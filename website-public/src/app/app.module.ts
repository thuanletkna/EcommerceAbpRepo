import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgwWowModule } from 'ngx-wow';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from 'src/shared/shared.module';
import { NotificationModalService } from 'src/shared/component/notification-modal/notification-modal.service';
import { HttpCustomInterceptor } from 'src/shared/http-interceptor/http-interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgwWowModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    OAuthModule.forRoot(),
  ],
  providers: [
    NotificationModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCustomInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }