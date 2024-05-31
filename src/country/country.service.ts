import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {

  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>

  ){}
  create(createCountryDto: CreateCountryDto, userId:number) {
    const country= new Country();
    country.id= createCountryDto.id;
    country.name= createCountryDto.name;
    return this.countryRepository.save(country);
  }

  findAllByCityRecycleId(cityId:number, recyclceId:number, userId:number) {
    return this.countryRepository.find({
      where:{
        recycles_country:{id:recyclceId,
          materials:{
            user_materials:{id:userId},
          },
        },
        cities_country: {id:cityId},

      },
      relations: ['recycles_country','recycles_country.materials.user_materials', 'cities_country'],
    });
  }
  findOne(id: number) {
    return this.countryRepository.findOneBy({id});
  }
  

  update(id: number, userId:number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update({
      id,
      recycles_country:{
        materials:{
          user_materials:{id:userId},
        },
      },
    }, {
      name:updateCountryDto.name,
    });
  }

  remove(id: number, userId:number) {
    return this.countryRepository.delete({
      id,
      recycles_country:{
        materials:{
          user_materials:{id:userId},
        },
      },
    });
  }
}
