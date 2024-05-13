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
    private countryRepository:Repository<Country>,
  ){}
  create(createCountryDto: CreateCountryDto) {
    const country=new Country();
    country.id=createCountryDto.id;
    country.nameCountry=createCountryDto.nameCountry;
    return this.countryRepository.save(country);
  }

  findAllCountryID(recycleID:number, cityID:number) {
    return this.countryRepository.find({
      where:{
        recycles:{id:recycleID},
        cities:{id:cityID},
      }
    });
  }

  findOne(id: number) {
    return this.countryRepository.findOneBy({id});
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.update(id, {
      nameCountry:updateCountryDto.nameCountry,
    });
  }

  remove(id: number) {
    return this.countryRepository.delete(id);
  }
}
