import { Test, TestingModule } from '@nestjs/testing';
import { RecyclecenterController } from './recyclecenter.controller';
import { RecyclecenterService } from './recyclecenter.service';

describe('RecyclecenterController', () => {
  let controller: RecyclecenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecyclecenterController],
      providers: [RecyclecenterService],
    }).compile();

    controller = module.get<RecyclecenterController>(RecyclecenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
