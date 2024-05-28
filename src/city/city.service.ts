import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ){}
  create(createCityDto: CreateCityDto) {
    const city= new City();
    city.id= createCityDto.id;
    city.name= createCityDto.name;
    city.countryId=createCityDto.countryId;
    return this.cityRepository.save(city);
  }

  findAllByCountryId(countryId:number, userId:number) {
    return this.cityRepository.find({
      where:
      {
        country_city:{id:countryId},
        recycles_city:{
          materials:{
            user_materials:{id:userId}
          },
        }
      },
      relations: ['country_city', 'recycles_city.materials.user_materials'],
    });
  }

  findAllByRecycleId(recycleId:number, userId:number){
    return this.cityRepository.find({
      where:
      {
        recycles_city:{id:recycleId,
          materials:{
            user_materials:{id:userId}
          }
        },
      },
      relations: ['recycles_city', 'recycles_city.materials.user_materials']
    })
  }

  

  update(id: number, userId:number, updateCityDto: UpdateCityDto) {
    return this.cityRepository.update({
      id,
      recycles_city:{
        materials:{
          user_materials:{id:userId},
        }
      },
    }, {
      id:updateCityDto.id,
      name:updateCityDto.name,
    });
  }

  remove(id: number, userId:number) {
    return this.cityRepository.delete({
      id,
      recycles_city:{
        materials:{
          user_materials:{id:userId}
        }
      },
    });
  }
}
