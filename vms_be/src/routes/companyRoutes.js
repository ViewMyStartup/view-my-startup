import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// 기업 관련 API 작성

// 기업 상세 조회 API
router.get("/:companyId", async (req, res) => {
  const { companyId } = req.params;

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
});

export default router;
