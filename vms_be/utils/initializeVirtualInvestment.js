import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function initializeVirtualInvestment() {
  const companies = await prisma.company.findMany();
  for (const company of companies) {
    const totalInvestmentAmount = await prisma.investment.aggregate({
      where: { companyId: company.id },
      _sum: {
        investmentAmount: true,
      },
    });

    // investmentAmount 합계를 안전하게 정수로 변환
    const totalInvestmentInt = Math.round(totalInvestmentAmount._sum.investmentAmount || 0);

    await prisma.company.update({
      where: { id: company.id },
      data: {
        virtualInvestment: totalInvestmentInt,
      },
    });
  }

  console.log('Virtual investment 초기화/업데이트 완료');
}
