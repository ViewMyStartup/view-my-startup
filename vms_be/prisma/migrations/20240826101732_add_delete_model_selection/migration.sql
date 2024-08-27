/*
  Warnings:

  - You are about to drop the `CompanySelection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanySelection" DROP CONSTRAINT "CompanySelection_companyId_fkey";

-- DropTable
DROP TABLE "CompanySelection";
