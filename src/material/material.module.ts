import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { AccountModule } from 'src/account/account.module';
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/entities/account.entity';
import { Recyclecenter } from 'src/recyclecenter/entities/recyclecenter.entity';
import { RecyclecenterService } from 'src/recyclecenter/recyclecenter.service';
import { RecyclecenterModule } from 'src/recyclecenter/recyclecenter.module';

@Module({
  controllers: [MaterialController],
  providers: [MaterialService],
  imports:[TypeOrmModule.forFeature([Material, Account, Recyclecenter]), AccountModule, RecyclecenterModule],
 // exports:[MaterialService],
})
export class MaterialModule {}
