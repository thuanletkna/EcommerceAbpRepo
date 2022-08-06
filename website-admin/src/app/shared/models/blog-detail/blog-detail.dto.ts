import { ListBaseDto } from "../app-dto";

export interface BlogDetailDto extends ListBaseDto {
    details?: string;
    blogId?: string;
    
}