import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function setupDatabase() {
  // 플래그 테이블 생성 SQL
  const createFlagTableSQL = `
    CREATE TABLE IF NOT EXISTS trigger_flags (
      flag_name VARCHAR(255) PRIMARY KEY,
      is_executed BOOLEAN DEFAULT FALSE
    );
  `;

  // 트리거 함수 생성 SQL
  const createTriggerFunctionSQL = `
    CREATE OR REPLACE FUNCTION update_vms_investment()
    RETURNS TRIGGER AS $$
    BEGIN
      -- 트리거가 최초로 실행되었는지 확인
      IF NOT EXISTS (SELECT 1 FROM trigger_flags WHERE flag_name = 'vms_investment_trigger') THEN
        -- 최초 실행 시 수행할 작업
        UPDATE Company
        SET vmsInvestment = (
          SELECT SUM(investmentAmount)
          FROM Investment
          WHERE companyId = NEW.companyId
        )
        WHERE id = NEW.companyId;

        -- 플래그 테이블에 실행 기록
        INSERT INTO trigger_flags (flag_name, is_executed) VALUES ('vms_investment_trigger', TRUE);
      ELSE
        -- 이후 조건에 따라 수행할 작업
        IF NEW.investmentAmount > 0 THEN
          UPDATE Company
          SET vmsInvestment = (
            SELECT SUM(investmentAmount)
            FROM Investment
            WHERE companyId = NEW.companyId
          )
          WHERE id = NEW.companyId;
        END IF;
      END IF;
      
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `;

  // 트리거 생성 SQL
  const createTriggerSQL = `
    CREATE TRIGGER vms_investment_update
    AFTER INSERT OR UPDATE ON Investment
    FOR EACH ROW EXECUTE FUNCTION update_vms_investment();
  `;

  // SQL 실행
  await prisma.$executeRawUnsafe(createFlagTableSQL);
  await prisma.$executeRawUnsafe(createTriggerFunctionSQL);
  await prisma.$executeRawUnsafe(createTriggerSQL);

  console.log('데이터 베이스 vmsInvestment 연산 트리거 설정 완료 되었습니다.');
}

setupDatabase()
  .catch((e) => {
    console.error('트리거 세팅 에러:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default setupDatabase;
