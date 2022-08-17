import {  ListBaseDto } from "../app-dto"; 
import { ImageSettingDto } from "../image-setting/image-setting.dto";

export interface HomePageConfigDto extends ListBaseDto {
    description?: string;
    linkBanner?:string;
    imageSetting?: ImageSettingDto[];

}
