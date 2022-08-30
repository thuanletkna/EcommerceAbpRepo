import { IParamFilter } from "../base.dto";
import { BlogFileDto } from "../blog-file/blog-file.dto";
import { ListBaseDto } from "../list-base.dto";

export interface BlogDto extends ListBaseDto {
    name?: string ;
    slug?: string ;
    descriptions?: string ;
    // newsTags?: ProductTagDto[];
    categoryId?:string;
    blogFile?: BlogFileDto[];
}

export interface IParamFilterNews extends IParamFilter {
    isBlog?: Boolean;
    categorySlug?: string;
    categoryId?: string;
    tagSlug?: string;
}