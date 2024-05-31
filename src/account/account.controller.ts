import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth.guard';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  @UseGuards(AuthGuard)
  findOne(@Request() req: PayloadRequest) {
    return this.accountService.findOne(req.user.id);
  }

  @Patch()
  @UseGuards(AuthGuard)
  update(@Body() updateAccountDto: UpdateAccountDto, @Request() req: PayloadRequest) {
    return this.accountService.update( req.user.id,updateAccountDto,);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Request() req:PayloadRequest) {
    return this.accountService.remove(req.user.id);
  }
}
