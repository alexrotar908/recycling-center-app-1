import { CreateAccountDto } from "src/account/dto/create-account.dto";

export class CreateVoucherDto {
    id:number;
    code:number;
    points:number;
    exp_date:Date;
    account: CreateAccountDto;
}
