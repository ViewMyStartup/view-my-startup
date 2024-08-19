import { PrismaClient } from "@prisma/client";
import companySelectionData from "./companySelectionData.js";

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제 (필요한 경우)
  await prisma.companySelection.deleteMany();

  // 초기 데이터 삽입
  await prisma.companySelection.createMany({
    data: companySelectionData,
    skipDuplicates: true,
  });

  console.log("CompanySelection 데이터 시딩 작업 완료되었습니다.");
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
