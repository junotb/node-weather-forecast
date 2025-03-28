import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VilageFcst } from '../database/model/vilage-fcst.model';
import { WeatherForecastService } from 'src/external/weather-forecast/weather-forecast.service';

@Injectable()
export class VilageFcstService {
  constructor(
    @InjectModel(VilageFcst)
    private vilageFcstModel: typeof VilageFcst,
    private weatherForecastService: WeatherForecastService,
  ) {}

  /**
   * 모든 날씨 예보 데이터 조회
   * @returns 날씨 예보 데이터 배열
   */
  async findAll() {
    const vilageFcsts = await this.vilageFcstModel.findAll();
    return vilageFcsts;
  }

  /**
   * 특정 위치의 날씨 예보 데이터 조회
   * @param gridX 격자 X 좌표
   * @param gridY 격자 Y 좌표
   * @returns 날씨 예보 데이터
   */
  async findOne(gridX: number, gridY: number) {
    const vilageFcst = await this.vilageFcstModel.findOne({
      where: {
        nx: gridX,
        ny: gridY,
      },
    });
    return vilageFcst;
  }

  /**
   * 날씨 예보 데이터 동기화
   * @param gridX 격자 X 좌표
   * @param gridY 격자 Y 좌표
   */
  async sync(gridX: number, gridY: number) {
    const vilageFcsts = await this.weatherForecastService.fetch(gridX, gridY);
    await this.vilageFcstModel.bulkCreate(vilageFcsts, {
      updateOnDuplicate: ['fcst_value'],
    });
  }
}
