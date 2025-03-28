import { Test, TestingModule } from '@nestjs/testing';
import { GridCoordinatesController } from './grid-coordinates.controller';
import { GridCoordinatesService } from './grid-coordinates.service';

describe('GridCoordinatesController', () => {
  let controller: GridCoordinatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GridCoordinatesController],
      providers: [GridCoordinatesService],
    }).compile();

    controller = module.get<GridCoordinatesController>(
      GridCoordinatesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
