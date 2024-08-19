import { PrismaClient } from "@prisma/client";
import investmentData from "./investmentData.js";

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  await prisma.Investment.deleteMany();

  // 초기 데이터 삽입
  await prisma.Investment.createMany({
    data: investmentData,
    skipDuplicates: true,
  });

  console.log("초기 가상투자자 데이터 시딩 작업 완료되었습니다.");
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
