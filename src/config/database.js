import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

dotenv.config();

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
} = process.env;

// 데이터베이스 연결
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  dialectModule: mysql2,
  port: DB_PORT,
  logging: false,
  define: {
    timestamps: false,
  },
});

export default sequelize;
