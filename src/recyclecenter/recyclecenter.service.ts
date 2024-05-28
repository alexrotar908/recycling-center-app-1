import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecyclecenterDto } from './dto/create-recyclecenter.dto';
import { UpdateRecyclecenterDto } from './dto/update-recyclecenter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recyclecenter } from './entities/recyclecenter.entity';
import { In, Repository } from 'typeorm';
import { AccountService } from 'src/account/account.service';
import { Material } from 'src/material/entities/material.entity';
import { MaterialService } from 'src/material/material.service';

@Injectable()
export class RecyclecenterService {
  constructor(
    @InjectRepository(Recyclecenter)
    private recycleRepository: Repository <Recyclecenter>,
    private materialService:MaterialService,
  ){ }
  async create(createRecyclecenterDto: CreateRecyclecenterDto, materialId:number) {
    const recycle= new Recyclecenter();
   recycle.name=createRecyclecenterDto.name;
   recycle.hours=createRecyclecenterDto.hours;
   recycle.address=createRecyclecenterDto.address;
   recycle.countryId=createRecyclecenterDto.countryId;
   recycle.cityId=createRecyclecenterDto.cityId;
   const materials = await this.materialService.findOne({
    where: {
      id: materialId,
    },
  });

  if (materials.length !== materials.length) {
    throw new NotFoundException('One or more recycle centers not found');
  }
    return this.recycleRepository.save(recycle);
  }

  findAllByMaterialsId(materialId:number, userId:number) {
    return this.recycleRepository.find({
      where:{
        materials:{id:materialId,
          user_materials:{id:userId}
        },
        
      },
      relations:['materials'],
    });
  }

  findAllByCountryId(countryId:number, userId:number){
    return this.recycleRepository.find({
      where:
       {
        country_recycles:{id:countryId},
        materials:{
          user_materials:{id:userId},
        },
       },
      relations: ['country_recycles', 'materials.user_materials'],
    });
  }

  findAllByCityId(cityId:number, userId:number){
    return this.recycleRepository.find({
      where:
       {
        city_recycles:{id:cityId},
        materials:{
          user_materials:{id:userId},
        },
       },
      relations: ['city_recycles', 'materials.user_materials'],
    });
  }


  

  findOne(id: number, userId:number) {
    return this.recycleRepository.findOneBy({id,
      materials:{
        user_materials:{id:userId},
      },
    });
  }

  update(id: number,userId:number, updateRecycleCenterDto: UpdateRecyclecenterDto) {
    return this.recycleRepository.update({id,
      materials:{
        user_materials:{id:userId},
      },
    },{
      name:updateRecycleCenterDto.name,
      hours:updateRecycleCenterDto.hours,
      address:updateRecycleCenterDto.address,
    });
  }

  remove(id: number, userId:number) {
    return this.recycleRepository.delete({id,
      materials:{
        user_materials:{id:userId}
      }
    });
  }
}
