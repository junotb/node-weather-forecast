import { Controller, Get, Param } from '@nestjs/common';
import { GridCoordinatesService } from './grid-coordinates.service';

@Controller('grid-coordinates')
export class GridCoordinatesController {
  constructor(
    private readonly gridCoordinatesService: GridCoordinatesService,
  ) {}

  @Get()
  findAll() {
    return this.gridCoordinatesService.findAll();
  }

  @Get(':gridX/:gridY')
  findOne(@Param('gridX') gridX: string, @Param('gridY') gridY: string) {
    return this.gridCoordinatesService.findOne(+gridX, +gridY);
  }
}
