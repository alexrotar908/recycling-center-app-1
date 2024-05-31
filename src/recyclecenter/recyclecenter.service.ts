import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecyclecenterDto } from './dto/create-recyclecenter.dto';
import { UpdateRecyclecenterDto } from './dto/update-recyclecenter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recyclecenter } from './entities/recyclecenter.entity';
import { In, Repository } from 'typeorm';
import { AccountService } from 'src/account/account.service';
import { Material } from 'src/material/entities/material.entity';
import { MaterialService } from 'src/material/material.service';
import { CountryService } from 'src/country/country.service';
import { CityService } from 'src/city/city.service';
import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';

@Injectable()
export class RecyclecenterService {
  constructor(
    @InjectRepository(Recyclecenter)
    private recycleRepository: Repository <Recyclecenter>,
    private materialService:MaterialService,
    private cityService: CityService,
    private countryService: CountryService,
  ){ }
  async create(createRecyclecenterDto: CreateRecyclecenterDto, materialId:number, cityId:number, countryId:number) {
   let city: City;
    let country:Country;
    if (createRecyclecenterDto.cityId) {
      city = await this.cityService.findOne(createRecyclecenterDto.cityId);
    } else {
      city = await this.cityService.create(createRecyclecenterDto.city, cityId);
    };

    if (createRecyclecenterDto.countryId) {
      country = await this.countryService.findOne(createRecyclecenterDto.countryId);
    } else {
      country = await this.countryService.create(createRecyclecenterDto.country, countryId);
    };

    
    const recycle= new Recyclecenter();
   recycle.name=createRecyclecenterDto.name;
   recycle.hours=createRecyclecenterDto.hours;
   recycle.address=createRecyclecenterDto.address;
   recycle.city_recycles=city;
   recycle.country_recycles=country;
   const materials = await this.materialService.isConnectedToRecycleId(materialId);
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
