import { PartialType } from '@nestjs/mapped-types';
import { CreateRecyclecenterDto } from './create-recyclecenter.dto';

export class UpdateRecyclecenterDto extends PartialType(CreateRecyclecenterDto) {}
