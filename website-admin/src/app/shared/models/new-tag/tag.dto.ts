import { BaseDto } from '../app-dto';

export interface TagDto extends BaseDto {
    slug?: string;
    name?: string;
}
