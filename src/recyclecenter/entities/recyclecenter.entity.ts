import { City } from "src/city/entities/city.entity";
import { Country } from "src/country/entities/country.entity";
import { Material } from "src/material/entities/material.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recyclecenter {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    name:string;

    @Column({length:100})
    hours:string;

    @Column({length:100})
    address:string;

    @Column()
    countryId:number;
    @Column()
    cityId:number;

    @ManyToOne(()=>Country,(country)=>country.recycles_country)
    @JoinColumn()
    country_recycles:Country;

    @ManyToOne(()=>City,(city)=>city.recycles_city)
    @JoinColumn()
    city_recycles:City;

    @ManyToMany(()=> Material, (material)=>material.recycles_materials)
    materials: Material [];
}
