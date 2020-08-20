import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { CookiesService } from './cookies-service';
import { GlobalInfoService } from './globalInfo.service';
import { HTTPService } from './http-service';





@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private cookie: CookiesService, private global: GlobalInfoService, private router: Router,
              private http: HTTPService, private message: NzMessageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 获取cookie, 没有则登录，
    const cookieData = this.cookie.getCookie();
    if (cookieData && cookieData !== 'undefined') {
      // cookie存在不能进入登录页
      return this.judgeUser(route, state);
    } else {
      // 如果路由存在id， 则表示有权限控制
      if (route.data.id) {
        this.router.navigate(['/login']);
      } else {
        return true;
      }
    }
  }

  /**
   * @author: 侠岚
   * @description: 用户信息存在处理
   * @param: {obj} route
   * @Date: 2020-08-19 10:01:59
   */
  judgeUser(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 判断用户信息存在
    if (this.global.userInfo.id) {
      // 判断路由权限
      return this.hasPermisson(route);
    } else {
      // 不存在获取用户信息
      this.getUserInfo(route, state);
    }
  }

  /**
   * @author: 侠岚
   * @param: {obj} route
   * @description: 获取用户信息
   * @Date: 2020-08-19 09:53:22
   */
  getUserInfo(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.http.post('/StatementInfo/get_statement_info_list').subscribe(res => {
      if (res.code === 0) {
        this.global.userInfo.id = 6;
        this.global.roles = ['admin', 'index', 'order', 'withdraw', 'invit', 'orderSettle', 'xx', '45'];
        // 生成侧边栏路由
        this.global.generateRoute();
        // this.global.roles = [];

        const flag = this.hasPermisson(route);
        if (flag) {
          this.router.navigate([state.url]);
        }
      }
    });
  }

  /**
   * @author: 侠岚
   * @description: 路由权限判断
   * @param: {string} route
   * @Date: 2020-08-19 10:26:33
   */
  hasPermisson(route: ActivatedRouteSnapshot): boolean {
    if (route.data.id) {
      if (this.global.roles.indexOf(route.data.id) >= 0) {
        return true;
      } else {
        this.message.error('您没有权限进入该页面,请联系管理员为您打开权限' + route.data.id);
        return false;
      }
    } else {
      // 没有id的，默认全部用户有权限
      return true;
    }
  }
}

