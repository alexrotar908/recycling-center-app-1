import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { VoucherTresholdModule } from './voucher_treshold/voucher_treshold.module';
import { RecyclingCenterModule } from './recycling_center/recycling_center.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { MaterialModule } from './material/material.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account/entities/account.entity';
import { City } from './city/entities/city.entity';
import { Country } from './country/entities/country.entity';
import { RecyclingCenter } from './recycling_center/entities/recycling_center.entity';
import { VoucherTreshold } from './voucher_treshold/entities/voucher_treshold.entity';
import { Material } from './material/entities/material.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AccountModule, VoucherTresholdModule, RecyclingCenterModule, CountryModule, CityModule, MaterialModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'recycle-center-db',
      entities:[Account, City, Country, RecyclingCenter, VoucherTreshold,Material ],
      synchronize:process.env.ENV !=='production',
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
