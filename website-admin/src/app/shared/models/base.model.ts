export class BaseModel {
    id?: string | number;
    Id?: string | number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creationTime?: Date | string;
    creatorId?: string;
    lastModificationTime?: Date | string;
    lastModifierId?: string;
}

export interface IParamFilter {
    filter?: string,
    maxResultCount?: number;
    skipCount?: number;
    sorting?: string
    dateFrom?: string;
    dateTo?: string;
    minPrice?: number;
    maxPrice?: number;
    status?: number | number[];
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
    totalPage: number,
    currentPage: number,
}
