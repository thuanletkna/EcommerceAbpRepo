import { BaseDto, IParamFilter } from "./base.dto";

export interface CategoryDto extends BaseDto {
  name?: string;
  nameEn?: string;
  order?: number;
  orderEn?: number;
  groupId?: number;
  url?: string;
  title?: string;
  description?: string;
  titleEn?: string;
  descriptionEn?: string;
  slug?: string;
  slugEn?: string;
  publishDate?: Date;
  creatorName?: string;
  isBlog?: Boolean;
}
export interface IParamFilterCategory extends IParamFilter {
  isBlog?: Boolean;
  categorySlug?: string;
  tagSlug?: string;
}
