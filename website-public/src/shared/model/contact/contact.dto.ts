import { ListBaseDto } from "../list-base.dto";

export interface ContactDto extends ListBaseDto {
    descriptions?: string;
    phone?:number;
    email?:string;
    facebook?:string;
    zalo?:string;
    shopee?:string;
}
