import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitComponent } from './invit';
import { FormsModule } from '@angular/forms';

// pipe
import { SwitchImgUrl } from '../../common/pipe/switch-imgUrl';

// zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';

// router
import { InvitRoutingModule } from './invit-routing';

@NgModule({
  declarations: [InvitComponent, SwitchImgUrl],
  imports: [
    CommonModule,
    InvitRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzModalModule,
    FormsModule
  ],
})
export class InvitModule { }
