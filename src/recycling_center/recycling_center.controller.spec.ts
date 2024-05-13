import { Test, TestingModule } from '@nestjs/testing';
import { RecyclingCenterController } from './recycling_center.controller';
import { RecyclingCenterService } from './recycling_center.service';

describe('RecyclingCenterController', () => {
  let controller: RecyclingCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecyclingCenterController],
      providers: [RecyclingCenterService],
    }).compile();

    controller = module.get<RecyclingCenterController>(RecyclingCenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
