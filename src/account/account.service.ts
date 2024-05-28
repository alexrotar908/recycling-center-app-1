import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private userRepository: Repository <Account>
  ){ }
  create(createAccountDto: CreateAccountDto) {
    const user= new Account();
    user.email=createAccountDto.email;
    user.username=createAccountDto.username;
    user.firstName=createAccountDto.firstName;
    user.lastName=createAccountDto.lastName;
    user.address=createAccountDto.address;
    user.password=createAccountDto.password;
    return this.userRepository.save(user);
  }

  isConnectedToVoucher(voucherId:number, id:number){
    return this.userRepository.findOneBy({
      voucher:{id:voucherId},
    });
  }
  findAllMaterialById(materialId:number) {
    return this.userRepository.find({
      where:{
        material:{id: materialId},
      },
      relations:['material']
    });
  }

  findAllVoucherById( voucherId:number){
    return this.userRepository.find({
      where:{
        voucher:{id:voucherId},
      },
      relations: ['voucher'],
    })
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.userRepository.update(id, {
      username: updateAccountDto.username,
      firstName:updateAccountDto.firstName,
      lastName:updateAccountDto.lastName,
      address:updateAccountDto.address,
    });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
