import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface BaseGetRequestInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}
