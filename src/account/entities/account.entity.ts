import { BeforeInsert, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Material } from "src/material/entities/material.entity";
import { Voucher } from "src/voucher/entities/voucher.entity";

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    email:string;

    @Column({length:100})
    username:string;

    @Column({length:100})
    firstName:string;

    @Column({length:100})
    lastName:string;

    @Column({length:100})
    address:string;

    @Column({length:200})
    password:string;

    @BeforeInsert()
    async hashPassword(){
        this.password= await bcrypt.hash(this.password, 10);
    }

    @ManyToMany(()=>Material, (material)=> material.user_materials)
    @JoinTable()
    material:Material[];

    @OneToOne(()=> Voucher, (voucher)=>voucher.user)
    @JoinColumn()
    voucher:Voucher;

}
