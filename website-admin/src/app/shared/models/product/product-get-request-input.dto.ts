
import { BaseGetRequestInput } from "../app-dto";

export interface ProductGetRequestInputDto extends BaseGetRequestInput {
    name: string ;
    slug: string ;
    productType: string ;
    thumbnail: string ;
    description: string ;
    userManual: number;
    detail: string;
    sku: string ;
    tagLine: string ;
    skinType: any;
    barcode: string ;
    gTINCode: string ;
    manageCode: string ;
    unit: string;
    price: number;
    capacity: number;
    width: number ;
    height: number ;
    lengths: number ;
    weight: number ;
    quantity: number;
    preOrderQuantity: number;
    inventoryQuantity: number;
    parentId?: any;
    isOutOfStock?: boolean;
    status: number;
    preOrderStatus: number;
    categories: string[];
    childIds: number[];
    giftIds: number[];
    mediaIds: string[];
    publishedAt: Date;
    productProductCategories: any;
    productMedias: any;
}