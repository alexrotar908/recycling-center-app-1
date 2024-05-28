import { Account } from "src/account/entities/account.entity";
import { Recyclecenter } from "src/recyclecenter/entities/recyclecenter.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Material {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    type:string;
    @Column()
    amount:number;

    @ManyToMany(()=>Account, (account)=>account.material)
    @JoinTable()
    user_materials:Account[];
    @ManyToMany(()=> Recyclecenter, (recycle)=>recycle.materials)
    @JoinTable()
    recycles_materials: Recyclecenter[];
}
