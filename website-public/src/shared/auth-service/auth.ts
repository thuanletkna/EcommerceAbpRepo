import { Params } from '@angular/router';

export interface LoginParams {
    username: string;
    password: string;
    rememberMe?: boolean;
    redirectUrl?: string;
    redirectParams?: Params;
}
