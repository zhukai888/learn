import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import '@angular/compiler';

// zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';

// comonpent
import { OrderSettleComponent } from './order-settle/order-settle.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

// router
import { OrderRoutingModule } from './order-routing.module';

// pipe
import { RewardTypePipe } from '../../common/pipe/reward-type.pipe';
import { RewardorderStatePipe } from '../../common/pipe/reward-order-state';
import { RequestState } from '../../common/pipe/request-state';

@NgModule({
  declarations: [OrderSettleComponent, WithdrawComponent, RewardTypePipe, RewardorderStatePipe, RequestState],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NzTableModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzModalModule,
    FormsModule
  ]
})
export class OrderModule { }
