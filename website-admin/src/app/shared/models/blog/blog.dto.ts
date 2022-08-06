import {  ListBaseDto } from "../app-dto";
import { BlogDetailDto } from "../blog-detail/blog-detail.dto";

export interface BlogDto extends ListBaseDto {
    descriptions?: string ;
    blogDetails?: BlogDetailDto[];
}