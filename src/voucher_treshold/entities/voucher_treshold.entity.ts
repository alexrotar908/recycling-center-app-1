import { Account } from "src/account/entities/account.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VoucherTreshold {

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

    @Column()
    points:number;

    @Column()
    code:number;
    
    @Column({type:'date'})
    exp_date:Date;

    @ManyToOne(()=>Account, (account)=>account.vouchers)
    @JoinColumn()
    accounts:Account;
}
