import { BaseDto } from "../base.dto";

export interface ProductAffilateFileDto extends BaseDto {
    productAffilateId?: string;
    fileStorageId?: string;
    fileType?:string;
}
