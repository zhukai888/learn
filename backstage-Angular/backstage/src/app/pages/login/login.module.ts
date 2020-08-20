import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// zorro
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

// router
import { LoginRoutingModule } from './login-routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LoginModule { }
