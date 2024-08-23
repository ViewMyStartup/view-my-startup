import express from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middleware/asyncHandler.js";

const prisma = new PrismaClient();
const router = express.Router();

// 기업 관련 API 작성

// 기업 상세 조회 API
router.get("/:companyId", async (req, res) => {
  const { companyId } = req.params;

  try {
    const company = await prisma.company.findUnique({
      where: { id: parseInt(companyId) }, // companyId를 정수로 변환하여 조회
      include: {
        investments: true, // Investment 모델의 가상 투자정보 포함!
      },
    });

    // 해당 ID의 회사가 데이터베이스에 존재하지 않는 경우
    if (!company) {
      return res
        .status(404)
        .json({ error: "찾으시는 기업이 존재하지 않습니다." });
    }

    // 투자 정보를 포함한 회사 정보 응답 형식
    res.json({
      id: company.id,
      name: company.name,
      logoUrl: company.logoUrl,
      description: company.description,
      category: company.category,
      totalInvestment: company.totalInvestment,
      revenue: company.revenue,
      employees: company.employees,
      investments: company.investments,
    });
  } catch (error) {
    // 서버 오류 발생시
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
      const { companyIds, sortBy, order = "desc" } = req.body;

      if (
        !Array.isArray(companyIds) ||
        companyIds.length === 0 ||
        companyIds.length > 5
      ) {
        return res
          .status(400)
          .json({ error: "기업 ID는 최대 5개 제공되어야 합니다." });
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
        default:
          return res.status(400).json({
            error: "정렬 기준이 유효하지 않습니다.",
          });
      }

      res.json({ companies: sortedCompanies });
    } catch (error) {
      res
        .status(500)
        .json({ error: "기업 비교 정보를 가져오는 중 오류가 발생했습니다." });
    }
  })
);

export default router;
