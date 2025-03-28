import { Test, TestingModule } from '@nestjs/testing';
import { VilageFcstController } from './vilage-fcst.controller';
import { VilageFcstService } from './vilage-fcst.service';

describe('VilageFcstController', () => {
  let controller: VilageFcstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VilageFcstController],
      providers: [VilageFcstService],
    }).compile();

    controller = module.get<VilageFcstController>(VilageFcstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
