import { PartialType } from '@nestjs/mapped-types';
import { CreateVoucherTresholdDto } from './create-voucher_treshold.dto';

export class UpdateVoucherTresholdDto extends PartialType(CreateVoucherTresholdDto) {}
