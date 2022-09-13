import { ListBaseGetRequestInput } from "../app-dto";

export interface ContactGetRequestInputDto extends ListBaseGetRequestInput {
    description?: string;
    phone?:string;
    email?:string;
    facebook?:string;
    zalo?:string;
    shopee?:string;
}
