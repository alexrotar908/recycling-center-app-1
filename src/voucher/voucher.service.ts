import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { Repository } from 'typeorm';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class VoucherService {

  constructor(
    @InjectRepository(Voucher)
    private voucherRepository: Repository<Voucher>,
    private userService: AccountService,
  ){}
  async create(createVoucherDto: CreateVoucherDto, userId) {
    const voucher= new Voucher();
    voucher.code=createVoucherDto.code;
    voucher.exp_date=createVoucherDto.exp_date;
    voucher.points=createVoucherDto.points;
    voucher.accountId= createVoucherDto.accountId;

    const isConnected= await this.userService.isConnectedToVoucher(
      userId, voucher.accountId
    );

    if(!isConnected){
      throw new UnauthorizedException('You are not a user for the voucher')
    }
    return this.voucherRepository.save(voucher);
  }

  findAllByAccountId(accountId:number) {
    return this.voucherRepository.find({
      where: 
      {
        user:{id:accountId},
      },
      relations: ['user']
    });
  }



  update(id: number,userId:number, updateVoucherDto: UpdateVoucherDto) {
    return this.voucherRepository.update({id,
      user:{id:userId},
    },{
      code:updateVoucherDto.code,
      exp_date:updateVoucherDto.exp_date,
      points:updateVoucherDto.points,
    });
  }

  remove(id: number, userId:number) {
    return this.voucherRepository.delete({id,
      user:{id:userId}
    });
  }
}
