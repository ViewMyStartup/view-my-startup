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
});

export default router;
