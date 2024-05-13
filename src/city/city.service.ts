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
    private cityRepository:Repository<City>,
  ){}
  create(createCityDto: CreateCityDto) {
    const city=new City();
    city.id=createCityDto.id;
    city.nameCity=createCityDto.nameCity;
    return this.cityRepository.save(city);
  }

  findAllCityId(centerID:number, countriesID:number) {
    return this.cityRepository.find({
      where:{
        recycles:{id:centerID},
        countries:{id:countriesID},
      }
    });
  }

  findOne(id: number) {
    return this.cityRepository.findOneBy({id});
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return this.cityRepository.update(id, {
      nameCity:updateCityDto.nameCity,
    });
  }

  remove(id: number) {
    return this.cityRepository.delete(id);
  }
}
