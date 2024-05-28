import { Country } from "src/country/entities/country.entity";
import { Recyclecenter } from "src/recyclecenter/entities/recyclecenter.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    name:string;

    @Column()
    countryId:number;

    @OneToMany(()=>Recyclecenter, (city)=>city.city_recycles)
    recycles_city:Recyclecenter[];

    @ManyToOne(()=>Country,(country)=>country.cities_country)
    @JoinColumn()
    country_city:Country;
}
