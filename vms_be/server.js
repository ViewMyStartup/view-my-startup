import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import companyRoutes from "./src/routes/companyRoutes.js";
import investmentRoutes from "./src/routes/investmentRoutes.js";
import errorHandlers from "./src/middlewares/errorHandler.js";

//트리거
import {
  setupInvestmentTrigger,
  initializeVirtualInvestment,
} from "./utils/VirtualInvestmentTrigger.js";

// 환경 변수 설정
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// cors 설정( 일단, 모든 도메인에서의 요청을 허용해놓음 )
app.use(cors());

// 정적 파일 제공 설정 *수정됨
const staticFilesPath = path.join(__dirname, process.env.STATIC_FILES_PATH);
app.use(express.static(staticFilesPath));

// 라우터 등록( API 추가시, 라우터 추가 예정 )
app.use("/api/companies", companyRoutes);
app.use("/api/investments", investmentRoutes);

app.use(...errorHandlers);

// 서버 시작
app.listen(process.env.PORT || 8000, () => console.log("Server Started"));

// 데이터베이스 트리거 추가
try {
  // 서버 시작 시 virtualInvestment 초기화
  await initializeVirtualInvestment();

  // 트리거 설정
  await setupInvestmentTrigger();

  console.log('Database initialization and trigger setup completed.');
} catch (error) {
  console.error('Error during database setup:', error);
}
