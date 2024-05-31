import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth.guard';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMaterialDto: CreateMaterialDto, @Request() req:PayloadRequest) {
    return this.materialService.create(createMaterialDto, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req: PayloadRequest) {
    const recycleId=1;
    return this.materialService.findAllByAccountRecycleId(req.user.id, recycleId);
  }
  @Get(':type')
  @UseGuards(AuthGuard)
  findOne(@Param('type') type: string, @Request() req: PayloadRequest) {
    return this.materialService.findOne(type, req.user.id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string,@Request() req: PayloadRequest, @Body() updateMaterialDto: UpdateMaterialDto) {
    return this.materialService.update( updateMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialService.remove(+id);
  }
}