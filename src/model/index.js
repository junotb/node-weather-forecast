const sequelize = require("../config/database");

const VilageFcst = require("../models/VilageFcst");
const GridCoordinates = require("../models/GridCoordinates");

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

module.exports = { sequelize, syncDatabase, VilageFcst, GridCoordinates };