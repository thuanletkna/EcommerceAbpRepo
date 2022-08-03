import { BaseDto, ListBaseDto } from "../app-dto";
import { SubProductPropertyDto } from "../sub-product-property/sub-product-property.dto";


export interface ProductPropertyDto extends ListBaseDto {
    subProductProperties?: SubProductPropertyDto[]
}