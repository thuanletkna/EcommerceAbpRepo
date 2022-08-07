import { ENotificationType } from "../utility/enum.const";

export interface BaseDto {
  id?: string;
  creationTime?: Date;
  creatorId?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  status?: number;
}

// export interface IPagination<T> {
//   items: T[];
//   totalCount: number;
// }
export class BaseModel {
  id?: string | number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  lastModificationTime?: Date;
  lastModifierId?: Date;
  creationTime?: Date;
  creatorId?: Date;
}

export interface IParamFilter {
  filter?: string;
  maxResultCount?: number;
  skipCount?: number;
  sorting?: string;
  dateFrom?: string;
  dateTo?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: number[] | number;
  shippingMethod?: number[];
}

export interface IResponsePaginate<T> {
  items: T[];
  totalCount: number;
  limit: number;
  page: number;
  maxResultCount?: number;
  skipCount?: number;
  totalPages: number;
}

export interface IPagination {
  totalPage: number;
  currentPage: number;
}

export interface INotificationOption {
  type?: ENotificationType;
  title?: string;
  message: string;
}

export declare class ListResultDto<T> {
  items?: T[];
  constructor(initialValues?: Partial<ListResultDto<T>>);
}
export declare class PagedResultDto<T> extends ListResultDto<T> {
  totalCount?: number;
  constructor(initialValues?: Partial<PagedResultDto<T>>);
}
