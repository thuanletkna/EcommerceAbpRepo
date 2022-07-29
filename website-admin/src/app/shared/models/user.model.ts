import { IParamFilter } from './base.model';

export class UserModel {
    tenantId: string;
    userName: string;
    name: string;
    surname: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber: string;
    phoneNumberConfirmed: string;
    lockoutEnabled: boolean;
    lockoutEnd: Date;
    concurrencyStamp: string;
    isDeleted: boolean;
    deleterId: string;
    deletionTime: Date;
    lastModificationTime: Date;
    lastModifierId: string;
    creationTime: Date;
    creatorId: string;
    id: string;
    extraProperties: { [key: string]: string };
}

export class CustomerModel {
    accountStatus: number;
    activeDate: string;
    address: string;
    creationTime: string;
    creatorId: string;
    redeemingPoint: number;
    membershipClass: {
        name: string;
    }
    district: {
        id: string,
        name: string
    };
    districtId: string;
    dob: string;
    email: string;
    facebookProfileUrl: string;
    fullName: string;
    gender: string;
    id: string;
    isFirstLogin: boolean;
    lastModificationTimeid: string;
    lastModifierId: string;
    phoneNumber: string;
    profileImage: string;
    province: {
        id: string,
        name: string
    };
    provinceId: string;
    userCode: string;
    userId: string;
    ward: {
        id: string,
        name: string
    };
    wardId: string;
    lastOrderTime: Date;
}

export interface IParamFilterUser extends IParamFilter {
    provinceId?: string
}
