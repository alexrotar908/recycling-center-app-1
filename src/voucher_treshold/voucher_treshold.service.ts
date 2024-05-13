import { Injectable } from '@nestjs/common';
import { CreateVoucherTresholdDto } from './dto/create-voucher_treshold.dto';
import { UpdateVoucherTresholdDto } from './dto/update-voucher_treshold.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VoucherTreshold } from './entities/voucher_treshold.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VoucherTresholdService {

  constructor(
    @InjectRepository(VoucherTreshold)
    private voucherRepository:Repository<VoucherTreshold>,
  ){}
  create(createVoucherTresholdDto: CreateVoucherTresholdDto) {
    const voucher=new VoucherTreshold();
    voucher.email=createVoucherTresholdDto.email;
    voucher.firstName=createVoucherTresholdDto.firstName;
    voucher.name=createVoucherTresholdDto.name;
    voucher.username=createVoucherTresholdDto.username;
    voucher.code=createVoucherTresholdDto.code;
    voucher.address=createVoucherTresholdDto.address;
    voucher.points=createVoucherTresholdDto.points;
    voucher.exp_date=createVoucherTresholdDto.exp_date;
    return this.voucherRepository.save(voucher);
  }

  findAllVoucherID(accountID:number) {
    return this.voucherRepository.find({
      where:{
        accounts:{id:accountID},
        
      }
    });
  }

  findOne(id: number, userID:number) {
     return this.voucherRepository.findOne({
      where:{
        accounts:{id:userID},id,
      }
    });;
  }

  update(id: number, updateVoucherTresholdDto: UpdateVoucherTresholdDto) {
    return this.voucherRepository.update(id, {
      username:updateVoucherTresholdDto.username,
      firstName:updateVoucherTresholdDto.firstName,
      name:updateVoucherTresholdDto.name,
      address:updateVoucherTresholdDto.address,
      exp_date:updateVoucherTresholdDto.exp_date,
      code:updateVoucherTresholdDto.code,
      points:updateVoucherTresholdDto.points,
    });
  }

  remove(id: number) {
    return this.voucherRepository.delete(id);
  }
}
