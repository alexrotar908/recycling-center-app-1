import { City } from "src/city/entities/city.entity";
import { RecyclingCenter } from "src/recycling_center/entities/recycling_center.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    nameCountry:string;

    @OneToMany(()=>RecyclingCenter,(country)=>country.countries)
    recycles:RecyclingCenter[];

    @OneToMany(()=>City, (country)=>country.countries)
    cities:City[];
}
