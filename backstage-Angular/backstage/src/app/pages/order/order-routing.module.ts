import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSettleComponent } from './order-settle/order-settle.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AuthGuard } from '../../common/services/authGuard';
import { DefaultComponent } from '../../layout/default/default.component';


// 路由配置
const orderRoutes: Routes = [
  {
    path: 'order',
    component: DefaultComponent,
    data: { name: '订单' },
    children: [
      {
        path: 'orderSettle', component: OrderSettleComponent, canActivate: [AuthGuard],
        data: { name: '订单管理', id: 'orderSettle' }
      },
      {
        path: 'withdraw', component: WithdrawComponent, canActivate: [AuthGuard], 
        data: { name: '提现管理', id: 'withdraw' }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(orderRoutes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
