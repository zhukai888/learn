import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  // 侧边栏折叠字段
  @Input() isCollapsed: boolean;

  public path: any;

  public routeList: any;





  constructor(private router: Router, private planform: PlatformLocation) {
  }

  ngOnInit(): void {
    // 获取当前路由配置
    this.path = this.planform.pathname.substr(1).split('/');


    // 获取所有路由配置
    this.routeList = this.router.config.filter(item => item.data.hidden !== true);


    // 首次展开当前路由的二级菜单
    this.routeList.forEach((route) => {
      if (!route.data.onlyOne && route.path === this.path[0]) {
        route.children.some(item => {
          if (item.path === this.path[1]) {
            route.open = true;
            return true;
          }
        });
      }
    });

    // this.router.events.subscribe((data) => {
    //   // data返回一堆路由事件，所有得筛选自己需要的，这里选择路由导航结束之后
    //   if (data instanceof NavigationEnd) {
    //     // 获取当前路由配置
    //     this.path = data.url.substr(1);
    //   }
    // })


  }

}
