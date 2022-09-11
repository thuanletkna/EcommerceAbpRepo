import { IsHot } from "src/shared/enums/ishot";
import { IParamFilter } from "../base.dto";
import { BlogDetailDto } from "../blog-detail/blog-detail.dto";
import { BlogFileDto } from "../blog-file/blog-file.dto";
import { ListBaseDto } from "../list-base.dto";

export interface BlogDto extends ListBaseDto {
    name?: string ;
    slug?: string ;
    descriptions?: string;
    categoryId?:string;
    blogFile?: BlogFileDto[];
    blogDetails?:BlogDetailDto[];
    isHot?: IsHot;
}

export interface IParamFilterNews extends IParamFilter {
    isBlog?: Boolean;
    categorySlug?: string;
    slug?:string;
    categoryId?: string;
    tagSlug?: string;
}