import { TypeOfEvent } from '../../enums/typeofevent';
import { ListBaseDto } from '../app-dto';

export interface CategoryDto extends ListBaseDto {
  level?: number;
  parentId?: number;
}
