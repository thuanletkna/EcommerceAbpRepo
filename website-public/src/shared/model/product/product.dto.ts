import { IsHot } from "src/shared/enums/ishot";
import { IParamFilter } from "../base.dto";
import { ListBaseDto } from "../list-base.dto";
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
    status?: number;
    // newsTags?: ProductTagDto[];
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

export interface IParamFilterNews extends IParamFilter {
    isBlog?: Boolean;
    categorySlug?: string;
    slug?:string;
    categoryId?: string;
    tagSlug?: string;
}