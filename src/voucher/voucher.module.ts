import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { AccountModule } from 'src/account/account.module';

@Module({
  controllers: [VoucherController],
  providers: [VoucherService],
  imports:[TypeOrmModule.forFeature([Voucher]), AccountModule],
//  exports:[VoucherService],

})
export class VoucherModule {}
