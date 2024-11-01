import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import companyRoutes from "./src/routes/companyRoutes.js";
import investmentRoutes from "./src/routes/investmentRoutes.js";
import errorHandlers from "./src/middlewares/errorHandler.js";

//유틸 
import { initializeVirtualInvestment } from "./utils/initializeVirtualInvestment.js";

// 환경 변수 설정
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// cors 설정
app.use(cors({
  origin: 'https://view-my-startup-company.netlify.app'
}));

// 정적 파일 제공 설정 *수정됨
// const staticFilesPath = path.join(__dirname, 'seeders/images');
const staticFilesPath = path.join(__dirname, 'seeders/images');
console.log('Serving static files from:', staticFilesPath);  // 경로 확인용 로그
app.use('/images', express.static(staticFilesPath));

// 라우터 등록( API 추가시, 라우터 추가 예정 )
app.use("/api/companies", companyRoutes);
app.use("/api/investments", investmentRoutes);

app.use(...errorHandlers);

// 서버 시작
app.listen(process.env.PORT || 8000, () => console.log("Server Started"));

// 서버 시작 후 자동 실행
try {
  // 서버 시작 시 virtualInvestment 초기화
  await initializeVirtualInvestment();
} catch (error) {
  console.error("initializeVirtualInvestment 오류 :", error);
}
