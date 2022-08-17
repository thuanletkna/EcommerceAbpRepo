import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//layout
import { MainLayoutComponent } from './layout/main-layout.component';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BlankLayoutComponent } from './layout/blank-layout.component';

//components


//other
import { environment } from 'src/environments/environment';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotificationModalComponent } from './component/notification-modal/notification-modal.component';
import { NavbarStyleTwoComponent } from './layout/navbar-style-two/navbar-style-two.component';
import { PreloaderComponent } from './layout/preloader/preloader.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import SwiperCore,{ Autoplay, Pagination, Swiper } from 'swiper';
import { SwiperModule } from 'swiper/angular';
// import { NotificationModalComponent } from './components/notification-modal/notification-modal.component';
SwiperCore.use([Autoplay, Pagination]);

@NgModule({
    declarations: [
        SafeHtmlPipe,
        MainLayoutComponent,
        HeaderComponent,
        FooterComponent,
        PreloaderComponent,
        SidebarMenuComponent,
        PaginationComponent,
        NotificationModalComponent,
        BlankLayoutComponent,
        NavbarStyleTwoComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        NgxSpinnerModule,
        SwiperModule
    ],
    exports: [
        // FormsModule,
        // RouterModule,
        // ReactiveFormsModule,
        // HeaderComponent,
        // FooterComponent,
        // CommonModule,
        // SafeHtmlPipe,
        // SidebarMenuComponent,
        // MainLayoutComponent,
        // BlankLayoutComponent,
        // NotificationModalComponent,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        NgxSpinnerModule,
        SafeHtmlPipe,
        MainLayoutComponent,
        HeaderComponent,
        FooterComponent,
        PreloaderComponent,
        PaginationComponent,
        NavbarStyleTwoComponent,
        SidebarMenuComponent,
        NotificationModalComponent,
        BlankLayoutComponent
    ],
    providers: [
        // {
        //     provide: RECAPTCHA_SETTINGS,
        //     useValue: {
        //         siteKey: environment.recaptcha.siteKey,
        //     } as RecaptchaSettings,
        // },
        // FACEBOOK_PIXEL_PROVIDER,
        // GOOGLE_ANALYTIC_PROVIDER,
        // GOOGLE_ADS_PROVIDER,
    ],
})
export class SharedModule {}
