import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

/**
 * 격자 위경도 좌표
 * @typedef {Object} GridCoordinates
 * @property {number} id
 * @property {string} region_code
 * @property {string} level1
 * @property {string} level2
 * @property {string} level3
 * @property {number} grid_x
 * @property {number} grid_y
 * @property {number} longitude_deg
 * @property {number} longitude_min
 * @property {number} longitude_sec
 * @property {number} latitude_deg
 * @property {number} latitude_min
 * @property {number} latitude_sec
 * @property {number} longitude
 * @property {number} latitude
 * @property {Date} location_update
 */
const GridCoordinates = sequelize.define(
  "grid_coordinates",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    region_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level2: {
      type: DataTypes.STRING,
      allowNull: true,
    },  
    level3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    grid_x: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grid_y: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude_deg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude_sec: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude_deg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude_sec: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    location_update: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "grid_coordinates",
  }
);

export default GridCoordinates;
