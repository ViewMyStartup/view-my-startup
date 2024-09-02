import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  BadRequestException,
  NotFoundException,
} from "../errors/CustomExceptions.js";
import bcrypt from 'bcrypt';

const router = Router();
const prisma = new PrismaClient();

// 가상 투자 업데이트 함수
async function updateVirtualInvestment(companyId, prisma) {
  const sumVirtualInvestment = await prisma.investment.aggregate({
    where: { companyId: companyId },
    _sum: { investmentAmount: true },
  });

  await prisma.company.update({
    where: { id: companyId },
    data: {
      virtualInvestment: sumVirtualInvestment._sum.investmentAmount || 0,
    },
  });
}

// 가상 투자 추가 API
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

    // 회사 존재 여부 확인
    const companyExists = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!companyExists) {
      throw new NotFoundException("해당 회사 정보가 존재하지 않습니다");
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 트랜잭션으로 투자 정보 생성 및 가상 투자 업데이트
    const investment = await prisma.$transaction(async (prisma) => {
      const investment = await prisma.investment.create({
        data: {
          companyId,
          investorName,
          investmentAmount,
          investmentComment,
          password: hashedPassword,
        },
        // select로 password를 제외하고 필요한 필드만 반환
        select: {
          id: true,
          companyId: true,
          investorName: true,
          investmentAmount: true,
          investmentComment: true,
        },
      });

      // 가상 투자 업데이트
      await updateVirtualInvestment(companyId, prisma);

      return investment;
    });

    res.status(201).json(investment);
  })
);

// 가상 투자 수정 API
router.put(
  "/:investmentId",
  asyncHandler(async (req, res) => {
    const investmentId = parseInt(req.params.investmentId, 10);
    const { investorName, investmentAmount, investmentComment, password } =
      req.body;

    // 필수 필드 검증
    if (
      !investorName ||
      investmentAmount === undefined ||
      !investmentComment ||
      !password
    ) {
      throw new BadRequestException("모든 필드는 필수값입니다");
    }

    // 투자 정보 가져오기
    const investment = await prisma.investment.findUnique({
      where: { id: investmentId },
    });

    if (!investment) {
      throw new NotFoundException("해당 투자 정보가 존재하지 않습니다");
    }

    // 비밀번호 검증
    const isMatch = await bcrypt.compare(password, investment.password);
    if (!isMatch) {
      throw new BadRequestException("비밀번호가 일치하지 않습니다");
    }

    // 트랜잭션으로 투자 정보 업데이트 및 가상 투자 업데이트
    const updatedInvestment = await prisma.$transaction(async (prisma) => {
      const updatedInvestment = await prisma.investment.update({
        where: { id: investmentId },
        data: {
          investorName,
          investmentAmount,
          investmentComment,
        },
        // select로 password를 제외하고 필요한 필드만 반환
        select: {
          id: true,
          companyId: true,
          investorName: true,
          investmentAmount: true,
          investmentComment: true,
        },
      });

      // 가상 투자 업데이트
      await updateVirtualInvestment(updatedInvestment.companyId, prisma);

      return updatedInvestment;
    });

    res.status(200).json(updatedInvestment);
  })
);

// 가상 투자 삭제 API
router.delete(
  "/:investmentId",
  asyncHandler(async (req, res) => {
    const investmentId = parseInt(req.params.investmentId, 10);
    const { password } = req.body;

    // 투자 정보 가져오기
    const investment = await prisma.investment.findUnique({
      where: { id: investmentId },
    });

    if (!investment) {
      throw new NotFoundException("해당 투자 정보가 존재하지 않습니다");
    }

    // 비밀번호 검증
    const isMatch = await bcrypt.compare(password, investment.password);
    if (!isMatch) {
      throw new BadRequestException("비밀번호가 일치하지 않습니다");
    }

    // 트랜잭션으로 투자 정보 삭제 및 가상 투자 업데이트
    await prisma.$transaction(async (prisma) => {
      await prisma.investment.delete({
        where: { id: investmentId },
      });

      // 가상 투자 업데이트
      await updateVirtualInvestment(investment.companyId, prisma);
    });

    res.status(204).send();
  })
);

// 투자자 상세 정보 조회 API
router.get(
  "/:investmentId",
  asyncHandler(async (req, res) => {
    const investmentId = parseInt(req.params.investmentId, 10);

    // 투자자 정보 가져오기 (password 제외)
    const investment = await prisma.investment.findUnique({
      where: { id: investmentId },
      select: {
        id: true,
        companyId: true,
        investorName: true,
        investmentAmount: true,
        investmentComment: true,
      },
    });

    if (!investment) {
      throw new NotFoundException("해당 투자 정보가 존재하지 않습니다");
    }

    // 같은 회사에 대한 모든 투자자 가져오기
    const companyId = investment.companyId;
    const companyInvestments = await prisma.investment.findMany({
      where: { companyId },
      orderBy: {
        investmentAmount: "desc",
      },
      select: {
        id: true,
        investorName: true,
        investmentAmount: true,
        investmentComment: true,
      },
    });

    // 순위 계산
    const rankedInvestments = companyInvestments.map((inv, index) => ({
      ...inv,
      rank: index + 1,
    }));

    // 요청된 투자자의 상세 정보, 순위 추출
    const investmentWithRank = rankedInvestments.find(
      (inv) => inv.id === investmentId
    );

    res.status(200).json({
      investment: investmentWithRank, // 투자자 정보와 순위
      rank: investmentWithRank.rank, // 투자자 순위
      totalInvestments: rankedInvestments.length, // 페이지네이션 목적용 총 투자자 수
    });
  })
);

export default router;
