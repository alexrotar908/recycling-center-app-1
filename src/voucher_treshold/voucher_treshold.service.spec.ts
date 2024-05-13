import { Test, TestingModule } from '@nestjs/testing';
import { VoucherTresholdService } from './voucher_treshold.service';

describe('VoucherTresholdService', () => {
  let service: VoucherTresholdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoucherTresholdService],
    }).compile();

    service = module.get<VoucherTresholdService>(VoucherTresholdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
