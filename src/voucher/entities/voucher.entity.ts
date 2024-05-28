import { Account } from "src/account/entities/account.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Voucher {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    code:number;

    @Column()
    points:number;

    @Column({type:'date'})
    exp_date:Date;

    @Column()
    accountId:number;

    @OneToOne(()=>Account,(account)=>account.voucher)
    @JoinColumn()
    user:Account;
}
