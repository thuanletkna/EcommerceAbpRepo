import { TypeOfEvent } from "../../enums/typeofevent";
import { ListBaseGetRequestInput } from "../app-dto";

export interface CategoryGetRequestInputDto extends ListBaseGetRequestInput {
  subCategoryName?: string,
  typeOfEvent?: TypeOfEvent,
}
