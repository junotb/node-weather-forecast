import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

/**
 * 단기 예보 데이터
 * @typedef {Object} VilageFcst
 * @property {number} id
 * @property {string} base_date
 * @property {string} base_time
 * @property {string} category
 * @property {string} fcst_date
 * @property {string} fcst_time
 * @property {number} fcst_value
 * @property {number} nx
 * @property {number} ny
 */
const VilageFcst = sequelize.define(
  "vilage_fcst",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    base_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    fcst_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fcst_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fcst_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    nx: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ny: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "vilage_fcst",
  }
);

export default VilageFcst;