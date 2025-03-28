import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VilageFcst } from '../database/model/vilage-fcst.model';
import { VilageFcstController } from './vilage-fcst.controller';
import { VilageFcstService } from './vilage-fcst.service';

@Module({
  imports: [SequelizeModule.forFeature([VilageFcst])],
  controllers: [VilageFcstController],
  providers: [VilageFcstService],
})
export class VilageFcstModule {}
