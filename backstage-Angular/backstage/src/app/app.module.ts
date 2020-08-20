import { registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';


// zorro
import { NzMessageService } from 'ng-zorro-antd/message';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';


// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 自定义组件module
import { LayoutModule } from './layout/layout.module';
import { IndexModule } from './pages/index/index.module';
import { OrderModule } from './pages/order/order.module';
import { InvitModule } from './pages/invit/invit.module';
import { LoginModule } from './pages/login/login.module';
import { ErrorModule } from './pages/404/404.module';

// pages
import { AppComponent } from './app.component';

// services
import { httpInterceptorProviders } from './common/interceptor';
import { CookieService } from 'ngx-cookie-service';
import { CookiesService } from './common/services/cookies-service';
import { GlobalInfoService } from './common/services/globalInfo.service';
import { AuthGuard } from './common/services/authGuard';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    IndexModule,
    OrderModule,
    InvitModule,
    LoginModule,
    ErrorModule // 必须是最后一个
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    httpInterceptorProviders,
    CookieService,
    CookiesService,
    GlobalInfoService,
    AuthGuard,
    NzMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
