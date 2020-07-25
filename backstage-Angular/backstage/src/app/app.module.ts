// module 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { httpInterceptorProviders } from './common/interceptor';
import { NzMessageService } from 'ng-zorro-antd/message';


// service

// pipe

// injector

// pages

// components
import { AppComponent } from './app.component';
import { SliderComponent } from './layout/slider/slider.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { ContainerComponent } from './pages/container/container.component';


// dependences

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    TopbarComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, httpInterceptorProviders, NzMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
