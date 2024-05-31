import { Test, TestingModule } from '@nestjs/testing';
import { RecycleCenterController } from './recyclecenter.controller';
import { RecyclecenterService } from './recyclecenter.service';

describe('RecyclecenterController', () => {
  let controller: RecycleCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecycleCenterController],
      providers: [RecyclecenterService],
    }).compile();

    controller = module.get<RecycleCenterController>(RecycleCenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
