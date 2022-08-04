import { BaseDto } from "../app-dto"; 

export interface ProductFileDto extends BaseDto {
    productId?: string;
    fileStorageId?: string;
    fileType?:string;
}
