// import { AccountConfigModule } from '@abp/ng.account/config';
// import { CoreModule } from '@abp/ng.core';
// import { registerLocale } from '@abp/ng.core/locale';
// import { IdentityConfigModule } from '@abp/ng.identity/config';
// import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
// import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
// import { ThemeBasicModule } from '@abp/ng.theme.basic';
// import { ThemeSharedModule } from '@abp/ng.theme.shared';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { environment } from '../environments/environment';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { APP_ROUTE_PROVIDER } from './route.provider';
// import { NZ_I18N } from 'ng-zorro-antd/i18n';
// import { en_US } from 'ng-zorro-antd/i18n';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
// import vi from '@angular/common/locales/vi';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AppHeaderService } from './shared/layout/app-header.service';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import { DeleteOutline, PlusOutline, CloseOutline } from '@ant-design/icons-angular/icons';
// import { OverlayModule } from '@angular/cdk/overlay';
// import { NZ_DATE_LOCALE, vi_VN } from 'ng-zorro-antd/i18n';

// registerLocaleData(vi);
// const icons: IconDefinition[] = [ DeleteOutline, PlusOutline, CloseOutline ];
// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     OverlayModule,
//     NzIconModule.forRoot(icons),
//     CoreModule.forRoot({
//       environment,
//       registerLocaleFn: registerLocale(),
//     }),
//     ThemeSharedModule.forRoot(),
//     AccountConfigModule.forRoot(),
//     IdentityConfigModule.forRoot(),
//     TenantManagementConfigModule.forRoot(),
//     SettingManagementConfigModule.forRoot(),
//     ThemeBasicModule.forRoot(),
//     FormsModule,
//     HttpClientModule,
//   ],
//   declarations: [AppComponent],
//   providers: [
//     APP_ROUTE_PROVIDER, { provide: NZ_I18N, useValue: vi_VN },{ provide: NZ_DATE_LOCALE, useValue: vi },AppHeaderService],
  
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { AppHeaderService } from './shared/layout/app-header.service';
import { SharedModule } from './shared/shared.module';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { dateFnsRegisterLocale, nzRegisterLocale, registerLocale } from './shared/register-locale';
import { NZ_DATE_LOCALE, NZ_I18N } from 'ng-zorro-antd/i18n';

import { HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCustomInterceptor } from './shared/http-interceptor/http-custom-interceptor';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale,
    }),
    ThemeSharedModule.forRoot(),
    // NgxsModule.forRoot([], { developmentMode: !environment.production }),
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'RequestVerificationToken'
    })
  ],
  declarations: [AppComponent],
  providers: [
    APP_ROUTE_PROVIDER, 
    AppHeaderService,
    {
      provide: NZ_I18N,
      useFactory: nzRegisterLocale,
      deps: [LOCALE_ID]
    },
    {
      provide: NZ_DATE_LOCALE,
      useFactory: dateFnsRegisterLocale,
      deps: [LOCALE_ID]
    },
    { provide: OAuthStorage, useValue: sessionStorage },
    // { provide: HIGHCHARTS_MODULES, useFactory: () => [HighChart3d] },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCustomInterceptor,
      multi: true,
    },
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
