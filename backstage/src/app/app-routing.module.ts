import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default/default.component';
import { OrderSettleComponent } from './pages/order/order-settle/order-settle.component';
import { WithdrawComponent } from './pages/order/withdraw/withdraw.component';
import { InvitComponent } from './pages/invit/invit.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  {
    path: 'index',
    component: DefaultComponent,
    data: { name: '首页', only: true } // hidden: false //隐藏参数
  },
  {
    path: 'order',
    component: DefaultComponent,
    data: { name: '订单' },
    children: [
      { path: 'orderSettle', component: OrderSettleComponent, data: { name: '订单管理' } },
      { path: 'withdraw', component: WithdrawComponent, data: { name: '提现管理' } },
    ]
  },
  {
    path: 'invit',
    component: DefaultComponent,
    data: { name: '邀请管理', only: true },
    children: [{ path: '', component: InvitComponent }]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: DefaultComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
