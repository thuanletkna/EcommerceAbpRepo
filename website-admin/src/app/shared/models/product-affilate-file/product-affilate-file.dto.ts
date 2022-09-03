import { BaseDto } from "../app-dto"; 

export interface ProductAffilateFileDto extends BaseDto {
    productAffilateId?: string;
    fileStorageId?: string;
    fileType?:string;
}
