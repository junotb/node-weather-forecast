import sequelize from "../config/database.js";

import vilageFcst from "../model/vilageFcst.js";
import gridCoordinates from "../model/gridCoordinates.js";

// 데이터베이스 연결 및 동기화
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    
    await sequelize.sync();
    console.log("Database synced");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export { sequelize, syncDatabase, vilageFcst, gridCoordinates };
