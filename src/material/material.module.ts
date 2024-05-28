import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { AccountModule } from 'src/account/account.module';
import { AccountService } from 'src/account/account.service';

@Module({
  controllers: [MaterialController],
  providers: [MaterialService],
  imports:[TypeOrmModule.forFeature([Material]), AccountModule],
  exports:[MaterialService],
})
export class MaterialModule {}
