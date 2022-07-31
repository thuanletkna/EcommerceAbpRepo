import { BaseDto } from "../app-dto";
import { ProductTagDto } from "../new-tag/product-tag.dto";

export interface ProductDto extends BaseDto {
    name?: string ;
    slug?: string ;
    description?: string ;
    detail?: string;
    comment?: string;
    price?: number;
    quantity?: number;
    status?: number;
    newsTags?: ProductTagDto[];
}