import { EGender } from "../enums/gender";

export class ProfileModel {
    profileImage: string;
    phoneNumber: string;
    email: string;
    fullName: string;
    dob: Date;
    gender: null;
    provinceId: string;
    districtId: string;
    wardId: string;
    address: string;
    facebookProfileUrl: string;
    province: null;
    district: null;
    ward: null;
    activeDate: null;
    accountStatus: 0;
    userCode: null;
    userId: null;
}

export interface IUpdateProfile {
    profileImage: string;
    fullName: string;
    dob: Date;
    gender: EGender;
    provinceId: string;
    districtId: string;
    wardId: string;
    address: string;
    facebookProfileUrl: string;
}
