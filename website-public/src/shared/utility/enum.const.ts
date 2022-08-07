export enum EUserManual {
    topical = 1,
    internal,
}

export enum EGender {
    male = 0,
    female,
    other,
}

export enum ESortingEvaluation {
    newest = 1,
    oldest,
}

export enum ECouponEntity {
    promotion = 1,
    Reward,
}

export enum EPromotionType {
    catalog = 1,
    cart,
    reward,
}

export enum EPromotionForm {
    discount = 1,
    increase_product,
    point,
}

export enum EDiscountType {
    percent = 1,
    amount,
}

export enum EStatus {
    active = 1,
    inactive = 0,
}

export enum EPaymentType {
    cod = 1,
    bank_transfer,
    momo,
    onepay_dometic,
    onepay_external,
    payoo_cc,
    payoo_atm,
    payoo_ewallet,
    payoo_qr,
}

export enum EOrderType {
    order = 1,
    pre_order,
    gift_order,
}

export enum EPlatform {
    web = 1,
    android_app,
    ios_app,
}

export enum EPaymentOption {
    deposit = 1,
    order,
    refund,
}

export enum EOrderUserStatus {
    awaiting_confirming = 1,
    packed,
    awaiting_shipping,
    delivered,
    cancelled,
    requesting_cancelling,
    requesting_declining,
}

export enum EOrderStatus {
    // chờ xác nhận
    pending = 1,
    awaiting_payment,
    paid,
    confirmed, // đang xử lý
    packed, // chờ lấy hàng
    handover, // đã giao vận chuyển
    awaiting_shipping, // đang giao hàng
    delivered, // giao hàng thành công
    completed, // đã đối soát
    requesting_cancel, // có yêu cầu hủy
    cancelled, // hủy
    declined, // từ chối
    refunded, // trả hàng
    requesting_declining, //có yêu cầu trả hàng
    shipping_failed,
}

export enum ENotificationType {
    success = 1,
    error,
}

export enum EOrderRequestHistoryType {
    requesting_cancelling = 1,
    requesting_declining,
}

export enum EOrderRequestHistoryStatus {
    waiting_confirming = 1,
    waiting_refunding,
    completed,
    rejected,
}

export enum ECategoryCampaignType {
    middle = 1,
    bottom,
}

export enum EPositionBanner {
    homepage = 'HOMEPAGE',
    // product = 'PRODUCT',
    homepage_app = 'HOMEPAGE_APP',
    product_app = 'PRODUCT_APP',
    solution = 'SOLUTION',
}

export enum ERewardType {
    coupon = 1,
    gift,
}

export enum EMembershipClassName {
    silver = 'Silver',
    gold = 'Gold',
    platinum = 'Platinum',
    diamond = 'Diamond',
}

export enum EEventActionTrackingGG {
    viewItem = 'view_item',
    addTOcart = 'add_to_cart',
    addToWishlist = 'add_to_wishlist',
    removeFromCart = 'remove_from_cart',
    viewCart = 'view_cart',
    beginCheckout = 'begin_checkout',
    addPaymentInfo = 'add_payment_info',
    addShippingInfo = 'add_shipping_info',
    purchase = 'purchase',
    generateLead = 'generate_lead',
    clicked = 'clicked',
}
