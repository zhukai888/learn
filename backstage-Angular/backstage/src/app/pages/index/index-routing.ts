import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index';

import { AuthGuard } from '../../common/services/authGuard';
import { DefaultComponent } from '../../layout/default/default.component';

// 路由配置
const indexRoutes: Routes = [
  {
    path: 'index',
    component: DefaultComponent,
    data: { name: '首页', only: true },
    children: [
      {
        path: '', component: IndexComponent, canActivate: [AuthGuard],
        data: { id: 'index' }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(indexRoutes)],
  exports: [RouterModule]
})
export class IndexRouting { }
