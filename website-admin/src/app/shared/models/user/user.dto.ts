import { Status } from "../../enums/status";
import { ListBaseDto } from "../app-dto";

export interface UserDto extends ListBaseDto {
  userName?: string;
  name?: string;
  surName?: string;
  email?: string;
  phoneNumber?: string;
  avatar?: string;
  status?: Status;
  roleId?: string;
}
