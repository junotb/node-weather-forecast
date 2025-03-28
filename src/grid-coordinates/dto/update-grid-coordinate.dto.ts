import { PartialType } from '@nestjs/mapped-types';
import { CreateGridCoordinateDto } from './create-grid-coordinate.dto';

export class UpdateGridCoordinateDto extends PartialType(
  CreateGridCoordinateDto,
) {}
