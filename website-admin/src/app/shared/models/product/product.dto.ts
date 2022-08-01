import { BaseDto } from "../app-dto";
import { ProductTagDto } from "../new-tag/product-tag.dto";

export interface ProductDto extends BaseDto {
    name?: string ;
    slug?: string ;
    description?: string ;
    productCode?:string;
    detail?: string;
    comment?: string;
    price?: number;
    quantity?: number;
    status?: number;
    newsTags?: ProductTagDto[];
    categoryId?:string;
    priceSale?:number;
    viewCount?:number;
    numberOfReview?:number;
    starRating?:number;
    tradeMarkId?:string;
    productTypeId?:string;
}