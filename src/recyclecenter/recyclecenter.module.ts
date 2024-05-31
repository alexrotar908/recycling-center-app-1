import { Module } from '@nestjs/common';
import { RecyclecenterService } from './recyclecenter.service';
import { RecycleCenterController } from './recyclecenter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recyclecenter } from './entities/recyclecenter.entity';
import { AccountModule } from 'src/account/account.module';
import { MaterialModule } from 'src/material/material.module';
import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { CityService } from 'src/city/city.service';
import { CountryService } from 'src/country/country.service';
import { MaterialService } from 'src/material/material.service';
import { CityModule } from 'src/city/city.module';
import { CountryModule } from 'src/country/country.module';

@Module({
  controllers: [RecycleCenterController],
  providers: [RecyclecenterService],
  imports:[TypeOrmModule.forFeature([Recyclecenter, City, Country, MaterialModule]), MaterialModule, CityModule, CountryModule],
  //exports:[RecyclecenterService],
})
export class RecyclecenterModule {}
