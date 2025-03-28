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
  tableName: 'vilage_fcst',
  timestamps: false,
})
export class VilageFcst extends Model<VilageFcst> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare base_date: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare base_time: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare category: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare fcst_date: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare fcst_time: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  declare fcst_value: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare nx: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare ny: number;
}
