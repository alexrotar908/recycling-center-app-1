import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth.guard';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createVoucherDto: CreateVoucherDto, @Request() req:PayloadRequest) {
    return this.voucherService.create(createVoucherDto, req.user.id);
  }

  @Get('/account/:accountId')
  @UseGuards(AuthGuard)
  findAll( @Request() req:PayloadRequest) {
    return this.voucherService.findAllByAccountId( req.user.id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string,@Request() req:PayloadRequest, @Body() updateVoucherDto: UpdateVoucherDto) {
    return this.voucherService.update(+id,req.user.id, updateVoucherDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @Request() req:PayloadRequest) {
    return this.voucherService.remove(+id, req.user.id);
  }
}
