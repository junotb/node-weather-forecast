import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GridCoordinatesController } from './grid-coordinates.controller';
import { GridCoordinatesService } from './grid-coordinates.service';
import { GridCoordinate } from '../database/model/grid-coordinates.model';

@Module({
  imports: [SequelizeModule.forFeature([GridCoordinate])],
  controllers: [GridCoordinatesController],
  providers: [GridCoordinatesService],
})
export class GridCoordinatesModule {}
