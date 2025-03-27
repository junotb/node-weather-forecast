import dotenv from "dotenv";
import express, { json } from "express";
import { syncDatabase } from "./model/index.js";
import GridCoordinatesRoute from "./route/gridCoordinatesRoute.js";
import VilageFcstRoute from "./route/vilageFcstRoute.js";

// 환경변수 로드
dotenv.config();

const app = express();
app.use(json());

const initializeServer = async () => {
  try {
    // 데이터베이스 및 모델 동기화
    await syncDatabase();
    console.log("데이터베이스 동기화 완료");

    // 라우터 설정
    app.use("/gridcoordinates", GridCoordinatesRoute);
    app.use("/vilagefcst", VilageFcstRoute);

    // 에러 핸들러 설정
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({
        error: err.message,
        message: "서버 오류가 발생했습니다.",
      });
    });

    // 서버 실행
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
    });
  } catch (error) {
    console.error("서버 실행 오류:", error);
    process.exit(1);
  }
};

// 서버 실행
initializeServer();
