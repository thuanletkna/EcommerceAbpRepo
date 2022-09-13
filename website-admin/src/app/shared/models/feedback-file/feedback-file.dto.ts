import { BaseDto } from "../app-dto"; 

export interface FeedBackFileDto extends BaseDto {
    feedBackId?: string;
    fileStorageId?: string;
    fileType?:string;
}
