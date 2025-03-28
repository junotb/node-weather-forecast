import { Test, TestingModule } from '@nestjs/testing';
import { VilageFcstService } from './vilage-fcst.service';

describe('VilageFcstService', () => {
  let service: VilageFcstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VilageFcstService],
    }).compile();

    service = module.get<VilageFcstService>(VilageFcstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
