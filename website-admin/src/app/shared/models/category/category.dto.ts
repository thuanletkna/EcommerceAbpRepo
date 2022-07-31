import { ListBaseDto } from '../app-dto';

export interface CategoryDto extends ListBaseDto {
  slug?: string;
  isBlog?: boolean;
  orderIndex?:number;
}
