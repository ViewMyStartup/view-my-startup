import { PrismaClient } from "@prisma/client";
import companyData from "./CompanyData.js";

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  await prisma.company.deleteMany();

  // 초기 데이터 삽입
  await prisma.company.createMany({
    data: companyData,
    skipDuplicates: true,
  });

  // 투자자(유저)의 companyId와 company의 ID를 일치시키기 위해, 모든 회사 데이터 가져오기
  const companies = await prisma.company.findMany();
  console.log(companies);

  console.log("초기 데이터 시딩 작업 완료되었습니다.");
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
