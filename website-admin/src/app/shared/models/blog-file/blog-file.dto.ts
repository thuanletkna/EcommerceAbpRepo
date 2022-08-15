import { BaseDto } from "../app-dto"; 

export interface BlogFileDto extends BaseDto {
    blogId?: string;
    fileStorageId?: string;
    fileType?:string;
}
