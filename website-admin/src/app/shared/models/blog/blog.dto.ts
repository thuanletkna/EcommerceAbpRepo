import {  ListBaseDto } from "../app-dto";
import { BlogDetailDto } from "../blog-detail/blog-detail.dto";
import { BlogFileDto } from "../blog-file/blog-file.dto";

export interface BlogDto extends ListBaseDto {
    descriptions?: string ;
    blogDetails?: BlogDetailDto[];
    blogFile?: BlogFileDto[];
}