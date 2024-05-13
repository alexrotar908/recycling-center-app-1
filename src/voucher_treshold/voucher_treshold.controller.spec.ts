import { Test, TestingModule } from '@nestjs/testing';
import { VoucherTresholdController } from './voucher_treshold.controller';
import { VoucherTresholdService } from './voucher_treshold.service';

describe('VoucherTresholdController', () => {
  let controller: VoucherTresholdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoucherTresholdController],
      providers: [VoucherTresholdService],
    }).compile();

    controller = module.get<VoucherTresholdController>(VoucherTresholdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
