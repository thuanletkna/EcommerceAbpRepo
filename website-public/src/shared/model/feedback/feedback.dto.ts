import { FeedBackFileDto } from "../feedback-file/feedback-file.dto";
import { ListBaseDto } from "../list-base.dto";

export interface FeedBackDto extends ListBaseDto {
    descriptions?: string ;
    feedBackFiles?: FeedBackFileDto[];
}