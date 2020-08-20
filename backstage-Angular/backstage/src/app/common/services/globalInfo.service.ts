import { Injectable, ɵConsole } from '@angular/core';
import { HTTPService } from './http-service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GlobalInfoService {

  roles: Array<string>;
  routeList: Array<object> = [];
  userInfo = {
    id: 0
  };

  constructor(private http: HTTPService, private router: Router) {
    // if (this.userInfo.id === 0) {
    //   this.router.config.forEach(route => {
    //     if ((!route.data || (!route.data.id && !route.data.hidden)) && route.children) {
    //       const children = route.children.filter(item => !item.data || (!item.data.id && !item.data.hidden));
    //       if (children.length > 0)
    //       { this.routeList.push(route) }
    //     }
    //   });
    //   console.log(this.routeList);
    // }
  }

  /**
   * @author: 侠岚
   * @description: 生成路由
   * @Date: 2020-08-19 14:52:06
   */
  public generateRoute(): void {
    this.routeList = [];
    this.router.config.forEach(route => {
      if (route.data && !route.data.hidden) {
        const routCopy = JSON.parse(JSON.stringify(route));
        routCopy.children = [];
        if (route.children) {
          route.children.forEach(child => {
            if (child.data) {
              if (!child.data.hidden && (!child.data.id || this.roles.indexOf(child.data.id) >= 0)) {
                routCopy.children.push(child);
              }
            } else {
              routCopy.children.push(child);
            }
          });
        }
        if (routCopy.children.length > 0) {
          this.routeList.push(routCopy);
        }
      }
    });
  }


}
