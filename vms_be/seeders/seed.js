import { PrismaClient } from "@prisma/client";
import companyData from "./CompanyData.js";
import investmentData from "./investmentData.js";
const prisma = new PrismaClient();

async function main() {
  // 연관된 데이터를 먼저 삭제
  await prisma.investment.deleteMany({});
  console.log("Investment 데이터 삭제 완료되었습니다.");

  // 기존 데이터 삭제
  await prisma.company.deleteMany();

  //ID 시퀀스 초기화
  await resetIdSequence();

  // 초기 데이터 삽입
  await prisma.company.createMany({
    data: companyData,
    skipDuplicates: true,
  });

  await prisma.investment.createMany({
    data: investmentData,
    skipDuplicates: true,
  });

  // 투자 정보 및 선택한 기업 companyId와 company의 ID를 일치시키기 위해, 모든 회사 데이터 가져오기
  const companies = await prisma.company.findMany();
  console.log(companies);

  console.log("초기 데이터 시딩 작업 완료되었습니다.");
}

async function resetIdSequence() {
  // 데이터베이스에 따라 시퀀스 초기화 SQL 명령어를 실행합니다.
  // PostgreSQL 예제:
  await prisma.$executeRaw`ALTER SEQUENCE "Company_id_seq" RESTART WITH 1;`;
  await prisma.$executeRaw`ALTER SEQUENCE "Investment_id_seq" RESTART WITH 1;`;
  console.log('ID 시퀀스 리셋.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
