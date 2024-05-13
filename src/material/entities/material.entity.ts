import { RecyclingCenter } from "src/recycling_center/entities/recycling_center.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Material {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    typeMaterial:string;

    @Column()
    amount:number;

    @ManyToMany(()=>RecyclingCenter, (recycles)=>recycles.material)
    @JoinTable()
    recycles:RecyclingCenter[];
}
