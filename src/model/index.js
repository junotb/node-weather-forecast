import sequelize from "../config/database.js";

import vilageFcst from "../model/vilageFcst.js";
import gridCoordinates from "../model/gridCoordinates.js";

// 데이터베이스 연결 및 동기화
const syncDatabase = async (retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log("데이터베이스 연결 및 동기화 성공");
      return;
    } catch (error) {
      console.error(`데이터베이스 연결 실패 (${i + 1}회째):`, error.message);
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error; // 마지막 시도에서 오류 발생 시 app.js로 throw
      }
    }
  }
};

export { sequelize, syncDatabase, vilageFcst, gridCoordinates };
