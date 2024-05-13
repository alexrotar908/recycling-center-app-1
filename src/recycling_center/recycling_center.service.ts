import { Injectable } from '@nestjs/common';
import { CreateRecyclingCenterDto } from './dto/create-recycling_center.dto';
import { UpdateRecyclingCenterDto } from './dto/update-recycling_center.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecyclingCenter } from './entities/recycling_center.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecyclingCenterService {
  constructor(
    @InjectRepository(RecyclingCenter)
    private recycleRepository:Repository<RecyclingCenter>,
  ){}
  create(createRecyclingCenterDto: CreateRecyclingCenterDto) {
    const center=new RecyclingCenter();
    center.name=createRecyclingCenterDto.center;
    center.hours=createRecyclingCenterDto.hours;
    center.address=createRecyclingCenterDto.address;
    return this.recycleRepository.save(center);;
  }

  findAllRecycleCenterID(accountID:number,countryID:number, cityID:number, materialID:number) {
    return this.recycleRepository.find({
      where:{
        accounts:{id:accountID},
        countries:{id:countryID},
        cities:{id:cityID},
        material:{id:materialID},
      }
    });
  }

  findOne(id: number) {
    return this.recycleRepository.findOneBy({id});
  }

  update(id: number, updateRecyclingCenterDto: UpdateRecyclingCenterDto) {
    return this.recycleRepository.update(id, {
      hours:updateRecyclingCenterDto.hours,
      address:updateRecyclingCenterDto.address,
      name:updateRecyclingCenterDto.center,
      
    });
  }

  remove(id: number) {
    return this.recycleRepository.delete(id);
  }
}
