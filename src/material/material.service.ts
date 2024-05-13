import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaterialService {

  constructor(
    @InjectRepository(Material)
    private materialRepository:Repository<Material>,
  ){}
  create(createMaterialDto: CreateMaterialDto) {
    const material=new Material();
    material.id=createMaterialDto.id;
    material.typeMaterial=createMaterialDto.typeMaterial;
    material.amount=createMaterialDto.amount;
    return this.materialRepository.save(material);
  }

  findAllMaterialID(recycleID:number) {
    return this.materialRepository.find({
      where:{
        recycles:{id:recycleID},
      }
    });
  }

  findOne(id: number) {
    return this.materialRepository.findOneBy({id});
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return this.materialRepository.update(id, {
      typeMaterial:updateMaterialDto.typeMaterial,
      amount:updateMaterialDto.amount,
    });
  }

  remove(id: number) {
    return this.materialRepository.delete(id);
  }
}
