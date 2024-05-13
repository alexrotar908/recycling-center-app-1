import { Module } from '@nestjs/common';
import { VoucherTresholdService } from './voucher_treshold.service';
import { VoucherTresholdController } from './voucher_treshold.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherTreshold } from './entities/voucher_treshold.entity';

@Module({
  controllers: [VoucherTresholdController],
  providers: [VoucherTresholdService],
  imports:[TypeOrmModule.forFeature([VoucherTreshold])],
})
export class VoucherTresholdModule {}
