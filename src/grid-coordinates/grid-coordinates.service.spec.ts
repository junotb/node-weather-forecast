import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GridCoordinatesService } from './grid-coordinates.service';

describe('GridCoordinatesService', () => {
  let service: GridCoordinatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          useFactory: (configService: ConfigService) => ({
            dialect: 'mysql',
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
          }),
          inject: [ConfigService],
        }),
      ],
      providers: [GridCoordinatesService],
    }).compile();

    service = module.get<GridCoordinatesService>(GridCoordinatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
