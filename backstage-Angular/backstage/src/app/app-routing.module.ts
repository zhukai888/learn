import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// comonpent
import { LoginComponent } from './pages/login/login';

/**
 * id: 用来判断用户权限(父组件可以不用设)，没有id 表示 通用权限
 * only： 标识只有一个子元素
 * hidden: 侧边栏隐藏
 * AuthGuard: 登录守卫
 */

const routes: Routes = [
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  { path: '', pathMatch: 'full', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
