// import { ProductCategoryModel } from '../models/product-category.model';
// import { ProfileModel } from '../models/profile.model';
// import { PromotionModel } from '../models/promotion.model';
// import { SolutionModel } from '../models/solution.model';
// import { SystemSettingModel } from '../models/system-setting.model';
// import {
//     EGender,
//     EOrderRequestHistoryStatus,
//     EOrderStatus,
//     EOrderUserStatus,
//     EPaymentType,
//     ESortingEvaluation,
// } from './enum.const';

export class AppConst {
    public static ITEM_PER_PAGE = 12;
    // public static ITEM_PER_EVALUATION = 5;

    // public static GENDER = [
    //     {
    //         name: 'Nam',
    //         value: EGender.male,
    //     },
    //     {
    //         name: 'Nữ',
    //         value: EGender.female,
    //     },
    //     // {
    //     //     name: 'Khác',
    //     //     value: EGender.other,
    //     // },
    // ];

    // public static SORTING_EVALUATION = [
    //     {
    //         name: 'Mới nhất đến cũ nhất',
    //         value: ESortingEvaluation,
    //         sorting: 'CreatedAt desc',
    //     },
    //     {
    //         name: 'Cũ nhất đến mới nhất',
    //         value: ESortingEvaluation,
    //         sorting: 'CreatedAt asc',
    //     },
    // ];

    // public static PROFILE: ProfileModel = new ProfileModel();

    // public static FEE_SHIP = [
    //     {
    //         name: 'Free ship',
    //         min: 1000000,
    //         max: null,
    //         fee: 0,
    //     },
    //     {
    //         name: 'Fee 30K',
    //         min: 1,
    //         max: 1000000 - 1,
    //         fee: 30000,
    //     },
    // ];

    // public static COUPON_CODE = '';

    // public static SKIN_TYPE = [
    //     { name: 'Tất cả', value: null, slug: '' },
    //     { name: 'Da Khô', value: 1, slug: 'da-kho' },
    //     { name: 'Da nhạy cảm', value: 2, slug: 'da-nhay-cam' },
    //     { name: 'Da dầu', value: 3, slug: 'da-dau' },
    //     { name: 'Da hỗn hợp', value: 4, slug: 'da-hon-hop' },
    // ];

    // public static BIGGEST_PRICE = 5200000;

    // public static SORTING_PRODUCT = [
    //     { name: 'Sản phẩm bán chạy', value: 'Sold desc' },
    //     { name: 'Khuyến mãi', value: 'Discount desc' },
    //     { name: 'Đánh giá', value: 'Star desc' },
    //     { name: 'Sản phẩm mới', value: 'PublishedAt desc' },
    // ];

    // public static MY_ORDER_STATUS = [
    //     { name: 'Tất cả', slug: 'tat-ca', value: null },
    //     { name: 'Chờ xác nhận', slug: 'cho-xac-nhan', value: EOrderUserStatus.awaiting_confirming },
    //     { name: 'Chờ lấy hàng', slug: 'cho-lay-hang', value: EOrderUserStatus.packed },
    //     { name: 'Đang giao hàng', slug: 'dang-giao-hang', value: EOrderUserStatus.awaiting_shipping },
    //     { name: 'Đã giao', slug: 'da-giao', value: EOrderUserStatus.delivered },
    //     // { name: 'Yêu cầu hủy', slug: 'yeu-cau-huy', value: EOrderUserStatus.requesting_cancelling },
    //     // { name: 'Yêu cầu trả hàng', slug: 'yeu-cau-tra-hang', value: EOrderUserStatus.requesting_declining },
    //     { name: 'Đã hủy', slug: 'da-huy', value: EOrderUserStatus.cancelled },
    // ];

    // public static ORDER_STATUS = [
    //     { name: 'Chờ xác nhận', value: EOrderStatus.pending, colorCode: '#1F222A' },
    //     { name: 'Chờ thanh toán', value: EOrderStatus.awaiting_payment, colorCode: '#1F222A' },
    //     { name: 'Đã thanh toán', value: EOrderStatus.paid, colorCode: '#1F222A' },
    //     { name: 'Đang xử lý', value: EOrderStatus.confirmed, colorCode: '#1F222A' },
    //     { name: 'Chờ lấy hàng', value: EOrderStatus.packed, colorCode: '#1F222A' },
    //     { name: 'Đã giao vận chuyển', value: EOrderStatus.handover, colorCode: '#1F222A' },
    //     { name: 'Đang giao hàng', value: EOrderStatus.awaiting_shipping, colorCode: '#1F222A' },
    //     { name: 'Đã giao thành công', value: EOrderStatus.delivered, colorCode: '#0FA409' },
    //     { name: 'Đã đối soát', value: EOrderStatus.completed, colorCode: '#0FA409' },
    //     { name: 'Đã yêu cầu hủy', value: EOrderStatus.requesting_cancel, colorCode: '#FF5544' },
    //     { name: 'Đã hủy', value: EOrderStatus.cancelled, colorCode: '#FF5544' },
    //     { name: 'Trả hàng thành công', value: EOrderStatus.declined, colorCode: '#FF5544' },
    //     { name: 'Trả hàng', value: EOrderStatus.refunded, colorCode: '#FF5544' },
    //     { name: 'Đã yêu cầu trả hàng', value: EOrderStatus.requesting_declining, colorCode: '#FF5544' },
    // ];

    // public static INFO: SystemSettingModel = new SystemSettingModel();

    // public static ADDRESS: SystemSettingModel = new SystemSettingModel();

    // public static CATEGORY: ProductCategoryModel[] = [new ProductCategoryModel()];

    // public static LIST_CATALOG: PromotionModel[] = [new PromotionModel()];

    // public static BANK_TRANSFER: SystemSettingModel = new SystemSettingModel();

    // public static SHIP_METHOD: SystemSettingModel = new SystemSettingModel();

    // public static SOLUTION: SolutionModel[] = [new SolutionModel()];

    // public static PAYMENT_TYPE = [
    //     { name: 'Thanh toán khi giao hàng (COD)', value: EPaymentType.cod },
    //     { name: 'Thanh toán bằng hình thức chuyển khoản', value: EPaymentType.bank_transfer },
    //     { name: 'Thẻ ATM/ Tài khoản ngân hàng (OnePay)', value: EPaymentType.onepay_dometic },
    //     { name: 'Thẻ Visa/ Master/ JCB (OnePay)', value: EPaymentType.onepay_external },
    //     { name: 'Thẻ ATM/ Tài khoản ngân hàng (Payoo)', value: EPaymentType.payoo_atm },
    //     { name: 'Thẻ Visa/ Master/ JCB (Payoo)', value: EPaymentType.payoo_cc },
    //     { name: 'Thanh toán online qua ví MoMo', value: EPaymentType.momo },
    // ];

    // public static ORDER_REQUEST_HISTORY = [
    //     { name: 'Hoàn tất', value: EOrderRequestHistoryStatus.completed },
    //     { name: 'Từ chối', value: EOrderRequestHistoryStatus.rejected },
    //     { name: 'Chờ xác nhận', value: EOrderRequestHistoryStatus.waiting_confirming },
    //     { name: 'Chờ hoàn tiền', value: EOrderRequestHistoryStatus.waiting_refunding },
    // ];

    // public static SORTING_NEWS = [
    //     { name: 'Mới nhất đến cũ nhất', value: 'publicDate desc' },
    //     { name: 'Cũ nhất đến mới nhất', value: 'publicDate asc' },
    //     { name: 'Lượt xem nhiều nhất', value: 'view desc' },
    // ];

    // public static MAP_STYLE = [
    //     {
    //         featureType: 'administrative',
    //         elementType: 'labels.text.fill',
    //         stylers: [
    //             {
    //                 color: '#444444',
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'landscape',
    //         elementType: 'all',
    //         stylers: [
    //             {
    //                 color: '#f2f2f2',
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'poi',
    //         elementType: 'all',
    //         stylers: [
    //             {
    //                 visibility: 'off',
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'road',
    //         elementType: 'all',
    //         stylers: [
    //             {
    //                 saturation: -100,
    //             },
    //             {
    //                 lightness: 45,
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'road.highway',
    //         elementType: 'all',
    //         stylers: [
    //             {
    //                 visibility: 'simplified',
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'road.arterial',
    //         elementType: 'labels.icon',
    //         stylers: [
    //             {
    //                 visibility: 'off',
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'transit',
    //         elementType: 'all',
    //         stylers: [
    //             {
    //                 visibility: 'off',
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'transit.station.rail',
    //         elementType: 'labels.text.fill',
    //         stylers: [
    //             {
    //                 visibility: 'on',
    //             },
    //             {
    //                 saturation: '14',
    //             },
    //             {
    //                 hue: '#d6ff00',
    //             },
    //             {
    //                 lightness: '8',
    //             },
    //             {
    //                 gamma: '5.54',
    //             },
    //             {
    //                 weight: '6.03',
    //             },
    //         ],
    //     },
    //     {
    //         featureType: 'water',
    //         elementType: 'all',
    //         stylers: [
    //             {
    //                 color: '#59b4c0',
    //             },
    //             {
    //                 visibility: 'on',
    //             },
    //         ],
    //     },
    // ];

    // public static DEFAULT_META_SEO = [
    //     {
    //         key: 'name="description"',
    //         content:
    //             ' The Beauty World là hệ thống các sản phẩm chăm sóc và điều trị da số 1 tại Mỹ. Chuyên điều trị các vấn đề về da: Mụn , Nám, & Lão hóa, cho làn da trắng sáng tự nhiên',
    //     },
    //     {
    //         key: 'name="keywords"',
    //         content: ' The Beauty World Vietnam, The Beauty World Việt Nam, The Beauty World, thebeautyworld.vn',
    //     },
    //     // {
    //     //     key: 'property="fb:app_id"',
    //     //     content: '399251974427722',
    //     // },
    //     {
    //         key: 'property="og:title"',
    //         content: ' The Beauty World |  Nhà phân phối mỹ phẩm chính hãng tại VN',
    //     },
    //     {
    //         key: 'property="og:description"',
    //         content:
    //             ' The Beauty World là hệ thống các sản phẩm chăm sóc và điều trị da số 1 tại Mỹ. Chuyên điều trị các vấn đề về da: Mụn , Nám, & Lão hóa, cho làn da trắng sáng tự nhiên',
    //     },
    //     {
    //         key: 'property="og:image"',
    //         content: ' ',
    //     },
    //     {
    //         key: 'property="og:url"',
    //         content: ' ',
    //     },
    //     {
    //         key: 'property="og:site_name"',
    //         content: 'The Beauty World',
    //     },
    //     {
    //         key: 'property="og:type"',
    //         content: 'article',
    //     },
    //     {
    //         key: 'property="og:locale"',
    //         content: 'vi',
    //     },
    //     {
    //         key: 'property="twitter:title"',
    //         content: ' The Beauty World |  Nhà phân phối mỹ phẩm chính hãng tại VN',
    //     },
    //     {
    //         key: 'property="twitter:description"',
    //         content:
    //             ' The Beauty World là hệ thống các sản phẩm chăm sóc và điều trị da số 1 tại Mỹ. Chuyên điều trị các vấn đề về da: Mụn , Nám, & Lão hóa, cho làn da trắng sáng tự nhiên',
    //     },
    //     {
    //         key: 'property="twitter:image"',
    //         content: ' ',
    //     },
    //     {
    //         key: 'property="twitter:card"',
    //         content: 'summary',
    //     },
    //     {
    //         key: 'property="twitter:url"',
    //         content: ' ',
    //     },
    // ];

    // public static TEXT_MEMBERSHIP_CLASS = {
    //     Silver: 'Bạc',
    //     Gold: 'Vàng',
    //     Platinum: 'Platinum',
    //     Diamond: 'Kim cương'
    // }
}
