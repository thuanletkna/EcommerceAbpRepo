import { BaseDto } from "../base.dto";

export interface ImageSettingDto extends BaseDto {
    fileStorageId?: string;
    fileType?:string;
    linkBanner?:string;
    description?:string;
}
