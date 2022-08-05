
import { BaseGetRequestInput, ListBaseGetRequestInput } from "../app-dto";
import { SubProductPropertyDto } from "../sub-product-property/sub-product-property.dto";

export interface ProductPropertyGetRequestInputDto extends ListBaseGetRequestInput {
    subProductProperties?: SubProductPropertyDto[]
}