import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function resetIdSequence() {
  // 데이터베이스에 따라 시퀀스 초기화 SQL 명령어를 실행합니다.
  await prisma.$executeRaw`ALTER SEQUENCE "Company_id_seq" RESTART WITH 1;`;
  await prisma.$executeRaw`ALTER SEQUENCE "Investment_id_seq" RESTART WITH 1;`;
  console.log("ID 시퀀스 리셋.");
}

// ID 시퀀스 리셋