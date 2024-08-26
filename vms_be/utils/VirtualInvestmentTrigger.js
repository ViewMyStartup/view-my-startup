import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function initializeVirtualInvestment() {
  const companies = await prisma.company.findMany();
  console.log(companies);

  for (const company of companies) {
    console.log(company);
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

export async function setupInvestmentTrigger() {
  const createTriggerFunctionSQL = `
    CREATE OR REPLACE FUNCTION update_virtual_investment()
    RETURNS TRIGGER AS $$
    BEGIN
      -- 합계를 계산하고 정수로 변환하여 업데이트
      UPDATE Company
      SET virtualInvestment = (
        SELECT COALESCE(SUM(investmentAmount), 0)::INT
        FROM Investment
        WHERE companyId = NEW.companyId
      )
      WHERE id = NEW.companyId;

      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `;

  const createTriggerSQL = `
    CREATE TRIGGER investment_update_trigger
    AFTER INSERT OR UPDATE ON Investment
    FOR EACH ROW EXECUTE FUNCTION update_virtual_investment();
  `;

  await prisma.$executeRawUnsafe(createTriggerFunctionSQL);
  await prisma.$executeRawUnsafe(createTriggerSQL);

  console.log('virtual_investment 트리거 설정 완료');
}
