import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
    private userService: AccountService,

  ){}
  async create(createMaterialDto: CreateMaterialDto, userId:number) {
    const material= new Material();
    material.id=createMaterialDto.id;
    material.amount=createMaterialDto.amount;
    material.type=createMaterialDto.type;
    const user= await this.userService.findOne(userId);
   material.user_materials=[user];
    return this.materialRepository.save(material);
  }

  findAllByAccountRecycleId(userId:number, recycleId:number) {
    return this.materialRepository.find({
      where:{
        user_materials:{id:userId},
        recycles_materials:{id:recycleId}
      },
      relations:['user_materials', ''],
    });
  }

  findOne(type:string, userId:number) {
    return this.materialRepository.findOne({
      where: {
        user_materials:{id:userId},
      },
      relations: ['user_materials'],
    });
  }

  update( updateMaterialDto: UpdateMaterialDto) {
    return this.materialRepository.update(
      updateMaterialDto.id,{
      type: updateMaterialDto.type,
      amount: updateMaterialDto.amount,
    });
  }

  remove(id: number) {
    return this.materialRepository.delete({id});
  }
}
