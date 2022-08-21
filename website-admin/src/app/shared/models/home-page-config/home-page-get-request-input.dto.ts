
import { ListBaseGetRequestInput } from "../app-dto";
import { ImageSettingDto } from "../image-setting/image-setting.dto";

export interface HomePageConfigGetRequestInputDto extends ListBaseGetRequestInput {
    description?: string;
    linkBanner?:string;
    imageSetting?: ImageSettingDto[];
}