import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { AccountModule } from 'src/account/account.module';
import { RecyclecenterModule } from 'src/recyclecenter/recyclecenter.module';
import { Country } from 'src/country/entities/country.entity';
import { Recyclecenter } from 'src/recyclecenter/entities/recyclecenter.entity';
import { CountryModule } from 'src/country/country.module';
import { CountryService } from 'src/country/country.service';

@Module({
  controllers: [CityController],
  providers: [CityService],
  imports:[TypeOrmModule.forFeature([City, Country]), CountryModule],
 // exports:[CityService],
})
export class CityModule {}
