import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { NZ_DATE_LOCALE, NZ_I18N } from 'ng-zorro-antd/i18n';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderService } from './shared/layout/app-header.service';
import { ModalService } from './shared/layout/modal.service';
import { dateFnsRegisterLocale, nzRegisterLocale, registerLocale } from './shared/register-locale';
import { SharedModule } from './shared/shared.module';

import { DeleteOutline, PlusOutline, CloseOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpCustomInterceptor } from './shared/http-interceptor/http-custom-interceptor';

const icons: IconDefinition[] = [ DeleteOutline, PlusOutline, CloseOutline ];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale,
    }),
    ThemeSharedModule.forRoot(),
    NzIconModule.forRoot(icons),
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'RequestVerificationToken'
    })
  ],
  declarations: [AppComponent],
  providers: [
    ModalService,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCustomInterceptor,
      multi: true,
    },
    { provide: OAuthStorage, useValue: localStorage },
    AppHeaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
