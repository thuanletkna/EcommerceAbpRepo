import {  ListBaseDto } from "../app-dto"; 

export interface ImageSettingDto extends ListBaseDto {
    fileStorageId?: string;
    fileType?:string;
    linkBanner?:string;
    homePageConfigId?:string;
}
