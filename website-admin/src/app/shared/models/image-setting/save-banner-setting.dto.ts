import { Status } from "../../enums";

export interface SaveBannerSettingDto {
  id?: string;
  fileId?: string;
  descriptions?: string;
  status: Status;
  file?: File;
}