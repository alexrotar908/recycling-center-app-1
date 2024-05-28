import { City } from "src/city/entities/city.entity";
import { Recyclecenter } from "src/recyclecenter/entities/recyclecenter.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    name:string;

    @OneToMany(()=>Recyclecenter, (country)=> country.country_recycles)
    recycles_country:Recyclecenter[];

    @OneToMany(()=>City, (country)=> country.country_city)
    cities_country:City[];
}
