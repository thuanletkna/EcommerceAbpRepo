
import { BaseGetRequestInput, ListBaseGetRequestInput } from "../app-dto";

export interface SubProductPropertyGetRequestInputDto extends ListBaseGetRequestInput {
    productPropertyId?:string;
}