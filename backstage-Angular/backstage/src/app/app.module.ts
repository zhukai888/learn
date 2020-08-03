
import { registerLocaleData } from '@angular/common';

// zorro
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './icons-provider.module';
import zh from '@angular/common/locales/zh';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
// import { NzGridModule } from 'ng-zorro-antd/grid';

// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';

// layout
import { AppComponent } from './app.component';
import { SliderComponent } from './layout/default/slider/slider.component';
import { TopbarComponent } from './layout/default/topbar/topbar.component';
import { DefaultComponent } from './layout/default/default/default.component';

// pipe
import { RewardTypePipe } from './common/pipe/reward-type.pipe';
import { RewardorderStatePipe } from './common/pipe/reward-order-state';
import { SwitchImgUrl } from './common/pipe/switch-imgUrl';
import { RequestState } from './common/pipe/request-state';



// pages
import { OrderSettleComponent } from './pages/order/order-settle/order-settle.component';

// services
import { httpInterceptorProviders } from './common/interceptor';
import { InvitComponent } from './pages/invit/invit.component';
import { WithdrawComponent } from './pages/order/withdraw/withdraw.component';
import { LoginComponent } from './pages/login/login.component';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    TopbarComponent,
    DefaultComponent,
    OrderSettleComponent,
    RewardTypePipe,
    RewardorderStatePipe,
    InvitComponent,
    SwitchImgUrl,
    WithdrawComponent,
    RequestState,
    LoginComponent,
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
    NzBreadCrumbModule,
    NzIconModule,
    NzTableModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzSwitchModule,
    NzModalModule,
    // NzGridModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, httpInterceptorProviders, NzMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
