import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private jwtService: JwtService,
  ){}
  async login(loginDto: LoginDto) {
    const user= await this.accountRepository.findOne({
      where: {
        email: loginDto.email,
      },
    });

    if (!user){
      throw new NotFoundException('User not found');
    }

    if(!bcrypt.compareSync(loginDto.password, user.password)){
      throw new BadRequestException('Invalid login details')
    }

    const payload={email:user.email, id: user.id}; 
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
/*
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  */
 
}
