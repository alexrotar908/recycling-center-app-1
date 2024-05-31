import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth.guard';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto, @Request() req: PayloadRequest) {
    return this.cityService.create(createCityDto, req.user.id);
  }

  @Get('/country/:countryId')
  @UseGuards(AuthGuard)
  findAll(@Param('countryId') countryId:number, @Request() req: PayloadRequest) {
    return this.cityService.findAllByCountryId(countryId, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAllRecycle(@Request() req: PayloadRequest) {
    const recyclceId=1;
    return this.cityService.findAllByRecycleId(recyclceId, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard)
  findOne(@Request() req: PayloadRequest) {
    return this.cityService.findOne(req.user.id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string,@Request() req: PayloadRequest, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id,req.user.id, updateCityDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @Request() req: PayloadRequest) {
    return this.cityService.remove(+id, req.user.id);
  }
}
