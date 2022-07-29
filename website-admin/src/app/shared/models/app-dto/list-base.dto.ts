import { Status } from '../../enums';
import { BaseDto } from './base.dto';

export interface ListBaseDto extends BaseDto {
  name?: string;
  code?: string;
  status?: Status;
}
