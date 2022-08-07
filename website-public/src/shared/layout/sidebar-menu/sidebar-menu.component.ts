import { Component, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/shared/app-base.component';
// import { AuthService } from '../../auth-service/auth.service';
// import { AppConst } from '../../utility/app.const';
// import { CommonHelper } from '../../utility/common-helper';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent extends AppBaseComponent {
    // constructor(protected readonly injector: Injector, private readonly authService: AuthService) {
    //     super(injector);
    // }
    constructor(injector: Injector) {
        super(injector);
    }

    // get profile() {
    //     return AppConst.PROFILE;
    // }

    // logout() {
    //     this.authService.logout().subscribe(() => {
    //         AppConst.PROFILE = null;
    //         CommonHelper.initGGTag()
    //         const cart = this.getLocalStorageCarts();
    //         delete cart.cartId;
    //         this.setLocalStorageCarts(cart);
    //         this.redirect('/');
    //     });
    // }

    activeReward() {
        const path = this.router.url;
        const urlValid = ['/uu-dai-cua-toi', '/uu-dai'];
        return urlValid.find(v => path.includes(v));
    }
}
