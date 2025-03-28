import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GridCoordinate } from 'src/database/model/grid-coordinates.model';

@Injectable()
export class GridCoordinatesService {
  constructor(
    @InjectModel(GridCoordinate)
    private gridCoordinateModel: typeof GridCoordinate,
  ) {}

  /**
   * 모든 격자 좌표 조회
   * @returns 격자 좌표 배열
   */
  async findAll() {
    const gridCoordinates = await this.gridCoordinateModel.findAll();
    return gridCoordinates;
  }

  /**
   * 특정 격자 좌표 조회
   * @param gridX 격자 X 좌표
   * @param gridY 격자 Y 좌표
   * @returns 격자 좌표
   */
  async findOne(gridX: number, gridY: number) {
    const gridCoordinate = await this.gridCoordinateModel.findOne({
      where: {
        grid_x: gridX,
        grid_y: gridY,
      },
    });
    return gridCoordinate;
  }
}
