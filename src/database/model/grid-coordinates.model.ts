import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'grid_coordinates',
  timestamps: false,
})
export class GridCoordinate extends Model<GridCoordinate> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  region_code: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  level1: string;

  @Column(DataType.STRING)
  level2: string;

  @Column(DataType.STRING)
  level3: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  grid_x: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  grid_y: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  longitude_deg: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  longitude_min: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  longitude_sec: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  latitude_deg: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  latitude_min: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  latitude_sec: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  longitude: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  latitude: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  location_update: Date;
}
