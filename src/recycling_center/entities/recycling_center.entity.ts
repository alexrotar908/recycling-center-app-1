import { Account } from "src/account/entities/account.entity";
import { City } from "src/city/entities/city.entity";
import { Country } from "src/country/entities/country.entity";
import { Material } from "src/material/entities/material.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecyclingCenter {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    name:string;
    @Column({length:100})
    hours:string;
    @Column({length:100})
    address:string;

    @ManyToMany(()=>Account, (account)=>account.recycles)
    @JoinTable()
    accounts:Account[];

    @ManyToMany(()=>Material, (material)=>material.recycles)
    @JoinTable()
    material:Material[];

    @ManyToOne(()=>Country, (country)=>country.recycles)
    @JoinColumn()
    countries:Country;

    @ManyToOne(()=>City, (city)=>city.recycles)
    @JoinColumn()
    cities:City;
}
