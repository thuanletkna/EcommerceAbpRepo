import { BaseDto } from "../base.dto";

export interface FeedBackFileDto extends BaseDto {
    feedBackId?: string;
    fileStorageId?: string;
    fileType?:string;
}
