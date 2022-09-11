import { BlogDetailDto } from "../blog-detail/blog-detail.dto";
import { ListBaseDto } from "../list-base.dto";
import { ProductAffilateFileDto } from "./product-affilate-file.dto";

export interface ProductAffilateDto extends ListBaseDto {
    productDetailId?:string;
    productDetail: BlogDetailDto;
    price?:number;
    priceSale?:number;
    isAffilateInDetailBlog?:boolean;
    linkAffilateShopee?:string;
    linkAffilateLazada?:string;
    linkAffilateTiki?:string;
    linkAffilateOther?:string;
    productAffilateFile?: ProductAffilateFileDto[];
}