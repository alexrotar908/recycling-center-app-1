import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { VoucherTresholdService } from './voucher_treshold.service';
import { CreateVoucherTresholdDto } from './dto/create-voucher_treshold.dto';
import { UpdateVoucherTresholdDto } from './dto/update-voucher_treshold.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth/auth.guard';

@Controller('voucher-treshold')
export class VoucherTresholdController {
  constructor(private readonly voucherTresholdService: VoucherTresholdService) {}

  @Post()
  create(@Body() createVoucherTresholdDto: CreateVoucherTresholdDto) {
    return this.voucherTresholdService.create(createVoucherTresholdDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req:PayloadRequest) {
    return this.voucherTresholdService.findAllVoucherID(req.user.id);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @Request() req:PayloadRequest) {
    return this.voucherTresholdService.findOne(+id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoucherTresholdDto: UpdateVoucherTresholdDto) {
    return this.voucherTresholdService.update(+id, updateVoucherTresholdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voucherTresholdService.remove(+id);
  }
}
