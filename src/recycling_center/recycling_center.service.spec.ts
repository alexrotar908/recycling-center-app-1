import { Test, TestingModule } from '@nestjs/testing';
import { RecyclingCenterService } from './recycling_center.service';

describe('RecyclingCenterService', () => {
  let service: RecyclingCenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecyclingCenterService],
    }).compile();

    service = module.get<RecyclingCenterService>(RecyclingCenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
