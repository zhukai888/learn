import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitComponent } from './invit';
import { AuthGuard } from '../../common/services/authGuard';
import { DefaultComponent } from '../../layout/default/default.component';

// 路由配置
const invitRoutes: Routes = [
  {
    path: 'invit',
    component: DefaultComponent,
    data: { name: '邀请管理', only: true },
    children: [
      {
        path: '', component: InvitComponent, canActivate: [AuthGuard], data: { id: 'invit' }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(invitRoutes)],
  exports: [RouterModule]
})
export class InvitRoutingModule { }

