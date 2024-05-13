import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { RecyclingCenter } from "src/recycling_center/entities/recycling_center.entity";
import { VoucherTreshold } from "src/voucher_treshold/entities/voucher_treshold.entity";
@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id:number;


    @Column({length:100})
    firstName:string;

    
    @Column({length:100})
    name:string;

    
    @Column({length:100})
    username:string;
    
    @Column({length:100})
    address:string;
    
    @Column({length:100})
    email:string;

    
    @Column({length:200})
    password:string;

    @BeforeInsert()
    async hashPassword(){
        if(this.password){
            this.password= await bcrypt.hash(this.password,10);
        }
    }

    @ManyToMany(()=>RecyclingCenter, (recycle)=>recycle.accounts)
    @JoinTable()
    recycles:RecyclingCenter[];

    @OneToMany(()=>VoucherTreshold, (account)=>account.accounts)
    vouchers:VoucherTreshold[];
}
