import { PrismaClient } from "@prisma/client";
import companyData from "./CompanyData.js";
import investmentData from "./investmentData.js";

//유틸 
import { initializeVirtualInvestment } from "../utils/initializeVirtualInvestment.js";
import { resetIdSequence } from "../utils/resetIdSequence.js";

const prisma = new PrismaClient();

async function main() {
  // 연관된 데이터를 먼저 삭제
  await prisma.investment.deleteMany({});
  console.log("Investment 데이터 삭제 완료되었습니다.");

  // 기존 데이터 삭제
  await prisma.company.deleteMany();
  console.log("Company 데이터 삭제 완료되었습니다.");

  //ID 시퀀스 초기화
  await resetIdSequence();

  // 초기 데이터 삽입
  await prisma.company.createMany({
    data: companyData,
    skipDuplicates: true,
  });
  console.log("Company 데이터 시딩 완료");

  await prisma.investment.createMany({
    data: investmentData,
    skipDuplicates: true,
  });
  console.log("investment 데이터 시딩 완료");

  // 투자 정보 및 선택한 기업 companyId와 company의 ID를 일치시키기 위해, 모든 회사 데이터 가져오기
  const companies = await prisma.company.findMany();
  console.log(companies);

  console.log("초기 데이터 시딩 작업 완료되었습니다.");

  // 데이터 시딩 시 virtualInvestment 초기화 // 만약 성공하면 서버 실행 코드에 필요 없어짐
  try {
    await initializeVirtualInvestment();
  } catch (error) {
    console.error("initializeVirtualInvestment 오류 :", error);
  }

  console.log("initializeVirtualInvestment 초기화 완료되었습니다.");
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

  