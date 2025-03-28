import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherForecastService } from './weather-forecast.service';

@Module({
  imports: [HttpModule],
  providers: [WeatherForecastService],
})
export class WeatherForecastModule {}
