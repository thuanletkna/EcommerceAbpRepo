import { ImageSettingDto } from "../image-setting/image-setting.dto";
import { ListBaseDto } from "../list-base.dto";

export interface HomePageConfigDto extends ListBaseDto {
    description?: string;
    linkBanner?:string;
    imageSetting?: ImageSettingDto[];

}
