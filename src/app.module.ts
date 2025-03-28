import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GridCoordinate } from './database/model/grid-coordinates.model';
import { VilageFcst } from './database/model/vilage-fcst.model';
import { GridCoordinatesModule } from './grid-coordinates/grid-coordinates.module';
import { VilageFcstModule } from './vilage-fcst/vilage-fcst.module';
import { WeatherForecastModule } from './external/weather-forecast/weather-forecast.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        models: [GridCoordinate, VilageFcst],
        autoLoadModels: true,
        synchronize: false,
      }),
    }),
    GridCoordinatesModule,
    VilageFcstModule,
    WeatherForecastModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
