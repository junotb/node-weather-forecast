import { Controller, Get, Param, Post } from '@nestjs/common';
import { VilageFcstService } from './vilage-fcst.service';
import { VilageFcst } from './entities/vilage-fcst.entity';

@Controller('vilage-fcst')
export class VilageFcstController {
  constructor(private readonly vilageFcstService: VilageFcstService) {}

  @Get()
  findAll(): Promise<VilageFcst[]> {
    return this.vilageFcstService.findAll();
  }

  @Get(':gridX/:gridY')
  findOne(
    @Param('gridX') gridX: number,
    @Param('gridY') gridY: number,
  ): Promise<VilageFcst | null> {
    return this.vilageFcstService.findOne(gridX, gridY);
  }

  @Post(':gridX/:gridY')
  sync(
    @Param('gridX') gridX: number,
    @Param('gridY') gridY: number,
  ): Promise<void> {
    return this.vilageFcstService.sync(gridX, gridY);
  }
}
