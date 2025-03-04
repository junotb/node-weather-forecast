import dotenv from "dotenv";
import express, { json } from "express";
import gridCoordinatesRoute from "./route/gridCoordinatesRoute.js";
import vilageFcstRoute from "./route/vilageFcstRoute.js";

dotenv.config();

const app = express();
app.use(json());

app.use("/gridcoordinates", gridCoordinatesRoute);
app.use("/vilagefcst", vilageFcstRoute);

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});