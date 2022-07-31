import { BaseDto } from '../app-dto';

export interface ProductTagDto extends BaseDto {
    newsId?: string;
    tagId?: string;
    name?: string;
}
