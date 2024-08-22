import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// 기업 관련 API 작성

// 기업 상세 조회 API
router.get("/:companyId", async (req, res) => {});

export default router;
