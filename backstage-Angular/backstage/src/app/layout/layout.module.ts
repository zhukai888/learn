import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

// component
import { DefaultComponent } from './default/default.component';
import { SliderComponent } from './default/slider/slider.component';
import { TopbarComponent } from './default/topbar/topbar.component';

// router
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DefaultComponent,
    SliderComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzDropDownModule,
    NzBreadCrumbModule,
    AppRoutingModule
  ],
  exports: [
    // NzLayoutModule
  ]
})
export class LayoutModule { }

