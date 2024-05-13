import { Country } from "src/country/entities/country.entity";
import { RecyclingCenter } from "src/recycling_center/entities/recycling_center.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({length:100})
    nameCity:string;

    @ManyToOne(()=>Country, (country)=> country.cities)
    @JoinColumn()
    countries:Country;

    @OneToMany(()=>RecyclingCenter, (city)=>city.cities)
    recycles:RecyclingCenter;
}
