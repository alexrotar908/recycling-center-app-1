import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { RecyclingCenterService } from './recycling_center.service';
import { CreateRecyclingCenterDto } from './dto/create-recycling_center.dto';
import { UpdateRecyclingCenterDto } from './dto/update-recycling_center.dto';
import { AuthGuard } from 'src/auth/auth/auth.guard';

@Controller('recycling-center')
export class RecyclingCenterController {
  constructor(private readonly recyclingCenterService: RecyclingCenterService) {}

  @Post()
  create(@Body() createRecyclingCenterDto: CreateRecyclingCenterDto) {
    return this.recyclingCenterService.create(createRecyclingCenterDto);
  }

  @Get()
  findAll() {
    const countryID=1;
    const materialID=1;
    const cityID=1;
    const accountID=1;
    return this.recyclingCenterService.findAllRecycleCenterID(countryID,cityID,materialID,accountID);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recyclingCenterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecyclingCenterDto: UpdateRecyclingCenterDto) {
    return this.recyclingCenterService.update(+id, updateRecyclingCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recyclingCenterService.remove(+id);
  }
}
