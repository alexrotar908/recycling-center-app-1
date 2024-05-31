import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth.guard';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() createCountryDto: CreateCountryDto, @Request() req:PayloadRequest) {
    return this.countryService.create(createCountryDto, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req:PayloadRequest) {
    const recycleId=1;
    const cityId=1;
    return this.countryService.findAllByCityRecycleId(recycleId,cityId, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard)
  findOne(@Request() req: PayloadRequest) {
    return this.countryService.findOne(req.user.id);
  }


  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string,@Request() req:PayloadRequest, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(+id, req.user.id, updateCountryDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @Request() req:PayloadRequest) {
    return this.countryService.remove(+id, req.user.id);
  }
}
