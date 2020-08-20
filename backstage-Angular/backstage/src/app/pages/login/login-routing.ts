import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';

// 路由配置
const invitRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(invitRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

