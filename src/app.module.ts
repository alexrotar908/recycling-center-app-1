import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MaterialModule } from './material/material.module';
import { RecyclecenterModule } from './recyclecenter/recyclecenter.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { VoucherModule } from './voucher/voucher.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account/entities/account.entity';
import { City } from './city/entities/city.entity';
import { Country } from './country/entities/country.entity';
import { Material } from './material/entities/material.entity';
import { Recyclecenter } from './recyclecenter/entities/recyclecenter.entity';
import { Voucher } from './voucher/entities/voucher.entity';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [AccountModule, MaterialModule, RecyclecenterModule, CountryModule, CityModule, VoucherModule, 
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'app1',
      entities:[
        Account,City,Country, Material, Recyclecenter, Voucher
      ], 
      synchronize: process.env.ENV !== 'production',
    }),
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
