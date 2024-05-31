import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/account/entities/account.entity';
import { JwtModule } from '@nestjs/jwt';
import { AccountModule } from 'src/account/account.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([Account]),
  AccountModule,
  JwtModule.register({
    global: true,
    secret: 'secretKey',
    signOptions: {expiresIn: '1d'},
  })],
})
export class AuthModule {}
