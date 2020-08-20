import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { errorComponent } from './404';

// 路由配置
const errorRoutes: Routes = [
  { path: '**', component: errorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(errorRoutes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }

