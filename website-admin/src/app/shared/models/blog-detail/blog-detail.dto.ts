import { ListBaseDto } from "../app-dto";
import { ProductAffilateDto } from "../product-affilate/product-affilate.dto";
export interface BlogDetailDto extends ListBaseDto {
    blogId?: string;
    details?: string;
    productAffilates?:ProductAffilateDto[];
}