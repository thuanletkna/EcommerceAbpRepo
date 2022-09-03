import { ListBaseDto } from "../app-dto";
import { ProductAffilateFileDto } from "../product-affilate-file/product-affilate-file.dto";
export interface ProductAffilateDto extends ListBaseDto {
    productDetailId?:string;
    price?:number;
    priceSale?:number;
    isAffilateInDetailBlog?:boolean;
    linkAffilateShopee?:string;
    linkAffilateLazada?:string;
    linkAffilateTiki?:string;
    linkAffilateOther?:string;
    productAffilateFile?: ProductAffilateFileDto[];
}