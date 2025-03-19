import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

/**
 * 단기 예보 데이터
 * @typedef {Object} VilageFcst
 * @property {number} id
 * @property {Date} base_date
 * @property {string} base_time
 * @property {string} category
 * @property {Date} fest_date
 * @property {string} fest_time
 * @property {number} fcst_value
 * @property {number} nx
 * @property {number} ny
 * @property {Date} created_at
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
      type: DataTypes.DATE,
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
    fest_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fest_time: {
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "vilage_fcst",
  }
);

export default VilageFcst;