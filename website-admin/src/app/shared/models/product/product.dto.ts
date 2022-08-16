import { IsHot } from "../../enums/isHot";
import { BaseDto, ListBaseDto } from "../app-dto";
import { ProductTagDto } from "../new-tag/product-tag.dto";
import { ProductFileDto } from "../product-file/product-file.dto";

export interface ProductDto extends ListBaseDto {
    name?: string ;
    slug?: string ;
    description?: string ;
    productCode?:string;
    details?: string;
    comment?: string;
    price?: number;
    quantity?: number;
    newsTags?: ProductTagDto[];
    categoryId?:string;
    priceSale?:number;
    viewCount?:number;
    numberOfReview?:number;
    starRating?:number;
    tradeMarkId?:string;
    productPropertyId?:string;
    productFile?: ProductFileDto[];
    isHot?:IsHot;
}