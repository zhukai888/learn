import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { IndexComponent } from './layout/index/index.component';
import { ContainerComponent } from './pages/container/container.component';
import { IndexComponent as containerIndex } from './pages/container/index/index.component';

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
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      name: '欢迎页',
      onlyOne: true
    }
  },
  {
    path: 'container',
    component: ContainerComponent,
    data: {
      name: '彻底的vv',
    },
    children: [{
      path: 'index',
      component: containerIndex,
      data: {
        name: '我的天',
      }
    }]
  },
  {
    path: 'containers',
    component: ContainerComponent,
    data: {
      name: '彻底的vv',
    },
    children: [{
      path: 'indexs',
      component: containerIndex,
      data: {
        name: 'sdd',
      },
      children: [{
        path: 'indexs',
        component: containerIndex,
        data: {
          name: 'sdd',
        }
      }]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
