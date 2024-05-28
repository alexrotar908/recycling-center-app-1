import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AccountService } from 'src/account/account.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: AccountService,
  ) {}

  @Post('register')
  async create(@Body()registerDto: RegisterDto){
    registerDto.email=registerDto.email.toLocaleLowerCase();
    const user = await this.userService.create(registerDto);

    if (!user) {
      throw new BadRequestException('Unable to register');
    }
    return this.authService.login({
      email: user.email,
      password: registerDto.password,
    });

  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

}