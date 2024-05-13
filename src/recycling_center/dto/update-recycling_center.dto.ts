import { PartialType } from '@nestjs/mapped-types';
import { CreateRecyclingCenterDto } from './create-recycling_center.dto';

export class UpdateRecyclingCenterDto extends PartialType(CreateRecyclingCenterDto) {}
