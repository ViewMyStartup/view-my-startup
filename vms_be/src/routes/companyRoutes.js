import express from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middlewares/asyncHandler.js";

const prisma = new PrismaClient();
const router = express.Router();

// 기업 리스트 조회 API
router.get("/", async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    sort_by = "name",
    order = "asc",
  } = req.query;

  try {
    const filter = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { category: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    const orderBy = {};
    orderBy[sort_by] = order;

    const companies = await prisma.company.findMany({
      where: filter,
      orderBy: orderBy,
      skip: (parseInt(page) - 1) * parseInt(limit),
      take: parseInt(limit),
    });

    const total = await prisma.company.count({ where: filter });

    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      total: total,
      companies: companies,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "기업 리스트를 가져오는 중 오류가 발생했습니다." });
  }
});

// 기업 상세 조회 API
router.get("/:companyId", async (req, res) => {
  const { companyId } = req.params;

  try {
    const company = await prisma.company.findUnique({
      where: { id: parseInt(companyId) },
      include: {
        investments: true,
      },
    });

    if (!company) {
      return res
        .status(404)
        .json({ error: "찾으시는 기업이 존재하지 않습니다." });
    }

    res.json({
      id: company.id,
      name: company.name,
      logoUrl: company.logoUrl,
      description: company.description,
      category: company.category,
      totalInvestment: company.totalInvestment,
      virtualInvestment: company.virtualInvestment,
      revenue: company.revenue,
      employees: company.employees,
      investments: company.investments,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "기업 상세 정보를 가져오는 중 오류가 발생했습니다." });
  }
});

// 기업 비교 API
router.post(
  "/compare",
  asyncHandler(async (req, res) => {
    try {
      const {
        companyIds,
        myCompanyId,
        sortBy,
        order = "desc",
        includeRank = false,
        checkMyCompanyRanking,
        incrementMySelection = false, // 나의 기업 선택 횟수를 증가시킬지 여부
        incrementCompareSelection = false, // 다른 기업 선택 횟수를 증가시킬지 여부
      } = req.body;

      if (
        !Array.isArray(companyIds) ||
        companyIds.length === 0 ||
        companyIds.length > 6
      ) {
        return res
          .status(400)
          .json({ error: "기업 ID는 1개이상 6개이하 제공되어야 합니다." });
      }

      if (checkMyCompanyRanking && !companyIds.includes(myCompanyId)) {
        return res.status(400).json({
          error: "내 기업 ID는 제공된 기업 ID 목록에 포함되어야 합니다.",
        });
      }

      // 나의 기업 선택 횟수를 증가시킬지 다른 기업 선택 횟수를 증가시킬지
      const updateData = {};
      if (incrementMySelection) {
        updateData.mySelectionCount = { increment: 1 };
      }
      if (incrementCompareSelection) {
        updateData.CompareSelectionCount = { increment: 1 };
      }

      if (Object.keys(updateData).length > 0) {
        await prisma.company.updateMany({
          where: { id: { in: companyIds.map((id) => parseInt(id)) } },
          data: updateData,
        });
      }

      const companies = await prisma.company.findMany({
        where: { id: { in: companyIds.map((id) => parseInt(id)) } },
        select: {
          id: true,
          name: true,
          logoUrl: true,
          description: true,
          category: true,
          totalInvestment: true,
          revenue: true,
          employees: true,
          mySelectionCount: true,
          CompareSelectionCount: true,
        },
      });

      if (companies.length === 0) {
        return res
          .status(404)
          .json({ error: "해당하는 기업이 존재하지 않습니다." });
      }

      let sortedCompanies;
      switch (sortBy) {
        case "totalInvestment":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc"
              ? a.totalInvestment - b.totalInvestment
              : b.totalInvestment - a.totalInvestment
          );
          break;
        case "revenue":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc" ? a.revenue - b.revenue : b.revenue - a.revenue
          );
          break;
        case "employees":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc"
              ? a.employees - b.employees
              : b.employees - a.employees
          );
          break;
        case "mySelectionCount":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc"
              ? a.mySelectionCount - b.mySelectionCount
              : b.mySelectionCount - a.mySelectionCount
          );
          break;
        case "CompareSelectionCount":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc"
              ? a.CompareSelectionCount - b.CompareSelectionCount
              : b.CompareSelectionCount - a.CompareSelectionCount
          );
          break;
        default:
          return res.status(400).json({
            error: "정렬 기준이 유효하지 않습니다.",
          });
      }

      let response;

      if (checkMyCompanyRanking) {
        const myCompanyIndex = sortedCompanies.findIndex(
          (company) => company.id === myCompanyId
        );

        let nearbyCompanies;
        if (myCompanyIndex === 0) {
          nearbyCompanies = sortedCompanies.slice(0, 5);
        } else if (myCompanyIndex === sortedCompanies.length - 1) {
          nearbyCompanies = sortedCompanies.slice(-5);
        } else {
          const start = Math.max(0, myCompanyIndex - 2);
          const end = Math.min(sortedCompanies.length, myCompanyIndex + 3);
          nearbyCompanies = sortedCompanies.slice(start, end);
        }

        if (includeRank) {
          response = nearbyCompanies.map((company, index) => ({
            ...company,
            rank: sortedCompanies.findIndex((c) => c.id === company.id) + 1,
          }));
        } else {
          response = nearbyCompanies;
        }
      } else {
        if (includeRank) {
          response = sortedCompanies.map((company, index) => ({
            ...company,
            rank: index + 1,
          }));
        } else {
          response = sortedCompanies;
        }
      }

      res.json({ companies: response });
    } catch (error) {
      res
        .status(500)
        .json({ error: "기업 비교 정보를 가져오는 중 오류가 발생했습니다." });
    }
  })
);

export default router;
