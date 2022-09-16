import { Status } from "../../enums";
import {  ListBaseDto } from "../app-dto"; 

export interface ContactDto{
    descriptions?: string;
    phone?:number;
    email?:string;
    facebook?:string;
    zalo?:string;
    shopee?:string;
    status: Status;
}
