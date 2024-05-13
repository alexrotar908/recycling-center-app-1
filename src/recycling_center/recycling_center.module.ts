import { Module } from '@nestjs/common';
import { RecyclingCenterService } from './recycling_center.service';
import { RecyclingCenterController } from './recycling_center.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecyclingCenter } from './entities/recycling_center.entity';

@Module({
  controllers: [RecyclingCenterController],
  providers: [RecyclingCenterService],
  imports:[TypeOrmModule.forFeature([RecyclingCenter])],
})
export class RecyclingCenterModule {}
