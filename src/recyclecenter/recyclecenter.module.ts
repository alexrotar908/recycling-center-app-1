import { Module } from '@nestjs/common';
import { RecyclecenterService } from './recyclecenter.service';
import { RecycleCenterController } from './recyclecenter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recyclecenter } from './entities/recyclecenter.entity';
import { AccountModule } from 'src/account/account.module';

@Module({
  controllers: [RecycleCenterController],
  providers: [RecyclecenterService],
  imports:[TypeOrmModule.forFeature([Recyclecenter])],
  exports:[RecyclecenterService],
})
export class RecyclecenterModule {}
