import { environment } from 'src/environments/environment';
import { IPagination } from '../model/base.dto';
import { EEventActionTrackingGG } from './enum.const';

interface IInputEventGenerateLead {
    email: string,
    phoneNumber?: string,
    name?: string,
    formName: string
}

export class CommonHelper {
    static isUndefinedOrEmptyString(value: unknown): boolean {
        return value === undefined || value === '';
    }

    static newId(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    static pad(num: number, size?: number) {
        let s = String(num);
        while (s.length < (size || 2)) {
            s = '0' + s;
        }
        return s;
    }

    static validuuid(value: string): boolean {
        if (!value) return false;
        const pattern =
            /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return pattern.test(value);
    }

    
    static getUrlParams(params: any) {
        let str = '?';
        for (const key in params) {
            if (params[key] !== '' && params[key] !== undefined && params[key] !== null) {
                if (str !== '?') {
                    str += '&';
                }
                if (Array.isArray(params[key])) {
                    for (let i = 0; i < params[key].length; i++) {
                        const element = params[key][i];
                        str += key + '[]=' + encodeURIComponent(element) + (i == params[key].length - 1 ? '' : '&');
                    }
                } else {
                    str += key + '=' + encodeURIComponent(params[key]);
                }
            }
        }
        return str;
    }

    static isFunction(input: any) {
        return Object.prototype.toString.call(input) === '[object Function]';
    }

    // static getUrlMediaForSeo(uuid: string, resolution?: string) {
    //     if (!uuid) return '';

    //     if (uuid.startsWith(environment.s3Config.publishUrl)) return uuid;

    //     return `${environment.s3Config.publishUrl}/${uuid}`;
    // }

    static getPagination(maxResultCount: number, skipCount: number, totalCount: number): IPagination {
        return {
            currentPage: (maxResultCount + skipCount) / maxResultCount,
            totalPage: Math.ceil(totalCount / maxResultCount),
        };
    }

    static getOffsetAndSkipByPageAndLimit(page: number, limit: number) {
        return {
            maxResultCount: limit,
            skipCount: limit * (page - 1),
        };
    }

    static getFilterPrice(biggestPrice: number, distance = 1000000): { min: number; max: any }[] {
        const result = [];
        const turns = Math.ceil(biggestPrice / distance);
        for (let i = 0; i < turns; i++) {
            result.push({ min: i * distance, max: (i + 1) * distance });
        }
        return result;
    }

    static covertStringToJson(value: string) {
        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    }

    static isNumber(num: any): boolean {
        if (typeof num === 'number') {
          return num - num === 0;
        }
        if (typeof num === 'string' && num.trim() !== '') {
          return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
        }
        return false;
      };

    // static getAllUrlParams(url: string) {
    //     // get query string from url (optional) or window
    //     var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    //     // we'll store the parameters here
    //     var obj = {};

    //     // if query string exists
    //     if (queryString) {
    //         // stuff after # is not part of query string, so get rid of it
    //         queryString = queryString.split('#')[0];

    //         // split our query string into its component parts
    //         var arr = queryString.split('&');

    //         for (var i = 0; i < arr.length; i++) {
    //             // separate the keys and the values
    //             var a = arr[i].split('=');

    //             // set parameter name and value (use 'true' if empty)
    //             var paramName = a[0];
    //             var paramValue = typeof a[1] === 'undefined' ? true : a[1];

    //             // (optional) keep case consistent
    //             paramName = paramName.toLowerCase();
    //             if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

    //             // if the paramName ends with square brackets, e.g. colors[] or colors[2]
    //             if (paramName.match(/\[(\d+)?\]$/)) {
    //                 // create key if it doesn't exist
    //                 var key = paramName.replace(/\[(\d+)?\]/, '');
    //                 if (!obj[key]) obj[key] = [];

    //                 // if it's an indexed array e.g. colors[2]
    //                 if (paramName.match(/\[\d+\]$/)) {
    //                     // get the index value and add the entry at the appropriate position
    //                     var index = /\[(\d+)\]/.exec(paramName)[1];
    //                     obj[key][index] = paramValue;
    //                 } else {
    //                     // otherwise add the value to the end of the array
    //                     obj[key].push(paramValue);
    //                 }
    //             } else {
    //                 // we're dealing with a string
    //                 if (!obj[paramName]) {
    //                     // if it doesn't exist, create property
    //                     obj[paramName] = paramValue;
    //                 } else if (obj[paramName] && typeof obj[paramName] === 'string') {
    //                     // if property does exist and it's a string, convert it to an array
    //                     obj[paramName] = [obj[paramName]];
    //                     obj[paramName].push(paramValue);
    //                 } else {
    //                     // otherwise add the property
    //                     obj[paramName].push(paramValue);
    //                 }
    //             }
    //         }
    //     }

    //     return obj;
    // }

    // static eventTrackingGoogle(input: {
    //     entity: ProductModel[] | BannerModel | IInputEventGenerateLead | OrderModel  | CartModel;
    //     eventAction: EEventActionTrackingGG;
    //     email?: string;
    //     shippingInfo?: ProfileAddressModel;
    //     totalOrder?: number;
    //     coupon?: string;
    //     paymentType?: string;
    //     quantity?: number;
    //     formName?: string
    // }) {
    //     if (!environment.isEventTrackingGG) return;
    //     try {
    //         let data: any = {};
    //         switch (input.eventAction) {
    //             case EEventActionTrackingGG.clicked:
    //                 data = this.eventClick(input.entity as BannerModel);
    //                 break;
    //             case EEventActionTrackingGG.generateLead:
    //                 data = this.eventGenerateLead(input.entity as IInputEventGenerateLead);
    //                 break;
    //             case EEventActionTrackingGG.purchase:
    //                 data = this.eventOrder(input.entity as OrderModel);
    //                 break;
    //             case EEventActionTrackingGG.addShippingInfo:
    //                 data = this.eventAddShipInfo(input.entity as CartModel, input.shippingInfo, input.email, input.totalOrder, input.coupon);
    //                 break;
    //             case EEventActionTrackingGG.addPaymentInfo:
    //                 data = this.eventAddPaymentInfo(input.entity as CartModel, input.totalOrder, input.coupon, input.paymentType);
    //                 break;
    //             case EEventActionTrackingGG.viewItem:
    //             case EEventActionTrackingGG.addShippingInfo:
    //             case EEventActionTrackingGG.addTOcart:
    //             case EEventActionTrackingGG.removeFromCart:
    //                 data = this.eventEcommerce(input.entity as ProductModel[], input.quantity);
    //                 break;
    //             default:
    //                 data = this.eventCart(input.entity as CartModel);
    //                 break;
    //         }
            
    //         (window as any).dataLayer = (window as any).dataLayer || [];
    //         (window as any).dataLayer.push({
    //             event: 'pangoTrack',
    //             eventAction: input.eventAction,
    //             label: '',
    //             ...data,
    //         });
    //     } catch (error) {}
    // }

    // static eventClick(entity: BannerModel) {
    //     return { cdpData: { properties: { objectType: 'banner', objectId: this.getUrlMediaForSeo(entity.imageURL) } } };
    // }

    static eventGenerateLead(entity: IInputEventGenerateLead) {
        return {
            user_data: {
                email_address: entity.email,
                phone_number: entity?.phoneNumber || '',
                address: {
                    first_name: '',
                    last_name: entity?.name || '',
                    city: '',
                    region: '',
                    district: '',
                    ward: '',
                    postal_code: '',
                    country: '',
                },
                form_key: '',
                form_name: entity.formName, //eg: contact
                form_vs: '', //form version,
                cf: '', //custom field
            },
        };
    }

    // static eventEcommerce(entity: ProductModel[], quantity: number) {
    //     const items = [];
    //     for (let i = 0; i < entity.length; i++) {
    //         const { id, name, price, unitPrice } = entity[i];
    //         const objCate = {};
    //         if (entity[i]?.productProductCategories?.length) {
    //             for (let j = 0; j < entity[i].productProductCategories.length; j++) {
    //                 const cateItem = entity[i].productProductCategories[j];
    //                 if (i === 0) {
    //                     objCate['item_category'] = cateItem.category.name;
    //                 } else {
    //                     objCate[`item_category${j + 2}`] = cateItem.category.name;
    //                 }
    //             }
    //         }

    //         items.push({
    //             item_id: id,
    //             item_name: name,
    //             affiliation: 'Google Merchandise Store',
    //             coupon: '',
    //             currency: 'VND',
    //             discount: price - unitPrice,
    //             index: i,
    //             item_brand: 'Google',
    //             item_list_id: '',
    //             item_list_name: '',
    //             item_variant: '',
    //             location_id: '',
    //             price: price,
    //             quantity,
    //             ...objCate,
    //         });
    //     }

    //     return {
    //         ecommerce: {
    //             items,
    //         },
    //     };
    // }

    

    

    

    

    // static initGGTag(userId = null) {
    //     (window as any).o2oDigitalData = [{ user_id: userId }];
    //     (function (w, d, s, l, i) {
    //         w[l] = w[l] || [];
    //         w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    //         var f = d.getElementsByTagName(s)[0],
    //             j: any = d.createElement(s),
    //             dl = l != 'dataLayer' ? '&l=' + l : '';
    //         j.async = true;
    //         j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    //         f.parentNode.insertBefore(j, f);
    //     })(window, document, 'script', 'o2oDigitalData', 'GTM-WZLCNT6');
    // }
}
