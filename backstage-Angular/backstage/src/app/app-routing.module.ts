import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { IndexComponent } from './layout/index/index.component'

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/index',
    data: {
      hidden: true
    }
  },
  {
    path: 'index',
    component: IndexComponent,
    data: {
      name: '首页',
      onlyOne: true
    }
  },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  {
    path: 'welcome', component: WelcomeComponent,
    data: {
      name: "欢迎页",
      onlyOne: true

    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
