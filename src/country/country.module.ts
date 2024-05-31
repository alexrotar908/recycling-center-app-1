import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { AccountModule } from 'src/account/account.module';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports:[TypeOrmModule.forFeature([Country])],
  //exports:[CountryService],
})
export class CountryModule {}
