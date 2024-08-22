import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  BadRequestException,
  NotFoundException,
} from "../errors/CustomExceptions.js";

const router = Router();
const prisma = new PrismaClient();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      companyId,
      investorName,
      investmentAmount,
      investmentComment,
      password,
    } = req.body;

    // 필수 필드 검증
    if (
      companyId === undefined ||
      !investorName ||
      investmentAmount === undefined ||
      !investmentComment ||
      !password
    ) {
      throw new BadRequestException("모든 필드는 필수값입니다");
    }

    // 투자 항목 생성
    const companyExists = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!companyExists) {
      throw new NotFoundException("해당 회사 정보가 존재하지 않습니다");
    }

    const investment = await prisma.investment.create({
      data: {
        companyId,
        investorName,
        investmentAmount,
        investmentComment,
        password,
      },
    });

    res.status(201).json(investment);
  })
);

export default router;
