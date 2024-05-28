import { Test, TestingModule } from '@nestjs/testing';
import { RecyclecenterService } from './recyclecenter.service';

describe('RecyclecenterService', () => {
  let service: RecyclecenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecyclecenterService],
    }).compile();

    service = module.get<RecyclecenterService>(RecyclecenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
