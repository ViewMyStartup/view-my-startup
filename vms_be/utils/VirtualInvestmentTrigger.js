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

    await prisma.company.update({
      where: { id: company.id },
      data: {
        virtualInvestment: totalInvestmentAmount._sum.investmentAmount || 0,
      },
    });
  }

  console.log('Virtual investment 초기화/업데이트');
}

export async function setupInvestmentTrigger() {
  const createTriggerFunctionSQL = `
    CREATE OR REPLACE FUNCTION update_virtual_investment()
    RETURNS TRIGGER AS $$
    BEGIN
      UPDATE Company
      SET virtualInvestment = (
        SELECT COALESCE(SUM(investmentAmount), 0)
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

  console.log('virtual_investment 트리거 Set 완료');
}
