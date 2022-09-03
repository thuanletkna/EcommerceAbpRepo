import { BlogDetailDto } from "../blog-detail/blog-detail.dto";
import { ListBaseDto } from "../list-base.dto";

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
}