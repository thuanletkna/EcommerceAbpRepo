import {  ListBaseDto } from "../app-dto";
import { FeedBackFileDto } from "../feedback-file/feedback-file.dto";

export interface FeedBackDto extends ListBaseDto {
    descriptions?: string ;
    feedBackFiles?: FeedBackFileDto[];
}