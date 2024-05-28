import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { AccountModule } from 'src/account/account.module';

@Module({
  controllers: [CityController],
  providers: [CityService],
  imports:[TypeOrmModule.forFeature([City]), AccountModule],
  exports:[CityService],
})
export class CityModule {}
