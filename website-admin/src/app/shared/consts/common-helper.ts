import { HttpParams } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
declare var $: any;

export class CommonHelper {
    static newId(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
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
                        str +=
                            key +
                            '[]=' +
                            encodeURIComponent(element) +
                            (i == params[key].length - 1 ? '' : '&');
                    }
                } else {
                    str += key + '=' + encodeURIComponent(params[key]);
                }
            }
        }
        return str;
    }

    static cleanAccents(str: string) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        str = str.replace(/Đ/g, 'D');
        // Combining Diacritical Marks
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
        return str;
    }

    static validGuid(value: string): boolean {
        if (!value) {
            return false;
        }
        const pattern =
            /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return pattern.test(value);
    }

    static getBodyUrlencoded(data: any) {
        let body = new HttpParams();
        Object.keys(data).forEach(function (key) {
            body = body.set(key, data[key]);
        });
        return body;
    }

    static validUuid(value: string): boolean {
        if (!value) return false;
        const pattern =
            /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return pattern.test(value);
    }

    static checkTokenValid(): boolean {
        const token = localStorage.getItem('access_token');
        if (!token) {
            return false;
        }
        const tokenObj = jwtDecode(token) as any;
        if (!tokenObj || (tokenObj?.exp && tokenObj.exp < moment().unix())) {
            return false;
        }
        return true;
    }

    static validuuid(value: string): boolean {
        if (!value) return false;
        const pattern =
            /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return pattern.test(value);
    }

    static getUrlMedia(uuid: string, resolution?: string, type?: string) {
        if (!uuid) return '';

        if (uuid.startsWith(environment.s3Config.publishUrl)) return uuid;

        return `${environment.s3Config.publishUrl}/${uuid}`;

        // if (this.validuuid(uuid)) {
        //     const urlParams = this.getUrlParams({ uuid, resolution, type });
        //     return environment.apis.media.url + urlParams;
        // }
        // if (uuid.startsWith('http')) {
        //     try {
        //         const url = new URL(uuid);
        //         const urlParams = this.getUrlParams({ uuid: `public` + url.pathname, resolution, type });
        //         return environment.apis.media.url + urlParams;
        //     }
        //     catch {
        //         return '';
        //     }
        // }
        // uuid = uuid.toLowerCase();
        // if (uuid.endsWith('.jpg')
        //     || uuid.endsWith('.gif')
        //     || uuid.endsWith('.png')
        //     || uuid.endsWith('.tiff')
        //     || uuid.endsWith('.jpeg')) return environment.application.baseUrl + '/' + uuid;

        // return '';
    }

    static removeElementSpin() {
        $('.spin-content').remove();
        $('.ant-spin-container').removeClass('ant-spin-blur');
    }

    static addElementSpin() {
        if (
            !$('#app')
                .find('.ant-spin-nested-loading')
                .first()
                .find('div')
                .first()
                .hasClass('spin-content')
        ) {
            $('#app')
                .find('.ant-spin-nested-loading')
                .first()
                .prepend(
                    `<div class="spin-content"><div class="ant-spin ant-spin-spinning ant-spin-show-text spin-loading"><span class="ant-spin-dot ant-spin-dot-spin"><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i></span><div class="ant-spin-text">Loading...</div></div></div>`,
                );
            $('.ant-spin-container').addClass('ant-spin-blur');
        }
    }

    static covertStringToJson(value: string){
        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    }

    static downloadFile(url: string, fileName: string) {
        let a = document.getElementById('link-download') as HTMLAnchorElement;
        if (!a) {
            a = document.createElement('a');
            a.id = 'link-download';
        }
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }
    
}
