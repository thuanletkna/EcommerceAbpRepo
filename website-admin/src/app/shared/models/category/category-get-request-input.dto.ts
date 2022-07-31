import { ListBaseGetRequestInput } from "../app-dto";

export interface CategoryGetRequestInputDto extends ListBaseGetRequestInput {
  slug?: string;
  isBlog?: boolean;
  orderIndex?:number;
}
