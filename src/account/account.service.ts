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
    private accountRepository:Repository<Account>,
  ){}
  create(createAccountDto: CreateAccountDto) {
    const account=new Account();
    account.email=createAccountDto.email;
    account.firstName=createAccountDto.firstName;
    account.name=createAccountDto.name;
    account.username=createAccountDto.username;
    account.password=createAccountDto.password;
    account.address=createAccountDto.address;
    return this.accountRepository.save(account);
  }

  findAllAccountID(centerID:number, voucherID:number) {
    return this.accountRepository.find({
      where:{
        recycles:{id:centerID},
        vouchers:{id:voucherID},
      }
    });
  }

  findOne(id: number) {
    return this.accountRepository.findOneBy({id});
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.accountRepository.update(id, {
      username:updateAccountDto.username,
      firstName:updateAccountDto.firstName,
      name:updateAccountDto.name,
      address:updateAccountDto.address,
    });
  }

  remove(id: number) {
    return this.accountRepository.delete(id);
  }
}
