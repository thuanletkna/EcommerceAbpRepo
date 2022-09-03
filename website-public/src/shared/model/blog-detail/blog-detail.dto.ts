import { BlogDto } from "../blog/blog.dto";
import { ListBaseDto } from "../list-base.dto";
import { ProductAffilateDto } from "../product-affilate/product-affilate.dto";

export interface BlogDetailDto extends ListBaseDto {
    blogId?:string;
    blog: BlogDto;
    details?: string;
    productAffilates?:ProductAffilateDto[];
}