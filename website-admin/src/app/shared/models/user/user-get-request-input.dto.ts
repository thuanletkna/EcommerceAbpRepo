import { ListBaseGetRequestInput } from '../app-dto';

export interface UserGetRequestInputDto extends ListBaseGetRequestInput {
  tenantIds?: string[];
  roleIds?: string[];
  isActive?: boolean;
}
