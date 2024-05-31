import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';
import { CountryService } from 'src/country/country.service';
import { Country } from 'src/country/entities/country.entity';

@Injectable()
export class CityService {

  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
    private countryService: CountryService
    
  ){}
  async create(createCityDto: CreateCityDto, countryID:number) {
    let country:Country;
    if (createCityDto.countryId) {
      country = await this.countryService.findOne(createCityDto.countryId);
    } else {
      country = await this.countryService.create(createCityDto.country, countryID);
    };
    const city= new City();
    city.id= createCityDto.id;
    city.name= createCityDto.name;
    city.country_city=country;
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

  findOne(id: number) {
    return this.cityRepository.findOneBy({id});
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
