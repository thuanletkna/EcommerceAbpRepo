import { BaseDto } from "../base.dto";

export interface BlogFileDto extends BaseDto {
    blogId?: string;
    fileStorageId?: string;
    fileType?:string;
}
