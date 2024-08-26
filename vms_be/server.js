import dotenv from "dotenv";
dotenv.config(); // 환경 변수 설정

import express from "express";
import cors from "cors";

import companyRoutes from "./src/routes/companyRoutes.js";
import investmentRoutes from "./src/routes/investmentRoutes.js";
import errorHandlers from "./src/middlewares/errorHandler.js";

//트리거
import vmsInvestment from "./src/models/vmsInvestment.js";


const app = express();

vmsInvestment()
  .then(() => {
    console.log('데이터 베이스 세팅 완료');
  })
  .catch((err) => {
    console.error('데이터 베이스 세팅 중 오류 발생:', err);
  });


app.use(express.json());

// cors 설정( 일단, 모든 도메인에서의 요청을 허용해놓음 )
app.use(cors());

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'seeders')));

// 라우터 등록( API 추가시, 라우터 추가 예정 )
app.use("/api/companies", companyRoutes);
app.use("/api/investments", investmentRoutes);

app.use(...errorHandlers);

// 서버 시작
app.listen(process.env.PORT || 8000, () => console.log("Server Started"));
