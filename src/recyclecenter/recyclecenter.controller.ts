import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { RecyclecenterService } from './recyclecenter.service';
import { CreateRecyclecenterDto } from './dto/create-recyclecenter.dto';
import { UpdateRecyclecenterDto } from './dto/update-recyclecenter.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth.guard';

@Controller('recyclecenter')
export class RecycleCenterController {
  constructor(private readonly recycleCenterService: RecyclecenterService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createRecycleCenterDto: CreateRecyclecenterDto, @Request() req: PayloadRequest) {
    return this.recycleCenterService.create(createRecycleCenterDto, req.user.id);
  }

  @Get('/material/:materialId')
  @UseGuards(AuthGuard)
  findAll(@Param('materialId') materialId:number, @Request() req: PayloadRequest) {
    return this.recycleCenterService.findAllByMaterialsId(materialId, req.user.id);
  }
  
  @Get('/country/:countryId')
  @UseGuards(AuthGuard)
  findCountry(@Param('countryId') countryId:number, @Request() req: PayloadRequest){
    return this.recycleCenterService.findAllByCountryId(countryId, req.user.id)
  }

  @Get('/city/:cityId')
  @UseGuards(AuthGuard)
  findCity(@Param('cityId') cityId:number, @Request() req: PayloadRequest){
    return this.recycleCenterService.findAllByCityId(cityId, req.user.id)
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @Request() req: PayloadRequest) {
    return this.recycleCenterService.findOne(+id, req.user.id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string,@Request() req: PayloadRequest, @Body() updateRecycleCenterDto: UpdateRecyclecenterDto) {
    return this.recycleCenterService.update(+id,req.user.id, updateRecycleCenterDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @Request() req: PayloadRequest) {
    return this.recycleCenterService.remove(+id, req.user.id);
  }
}