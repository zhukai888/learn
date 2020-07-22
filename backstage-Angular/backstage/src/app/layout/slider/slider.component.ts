import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  public path: string;

  public routeList: any;

  isCollapsed = false;

  constructor(private router: Router, private planform: PlatformLocation) {
  }

  ngOnInit(): void {
    //获取当前路由配置
    this.path = this.planform.pathname.substr(1)
    // 获取所有路由配置
    this.routeList = this.router.config.filter(item => item.data.hidden != true);

    this.router.events.subscribe((data) => {
      //data返回一堆路由事件，所有得筛选自己需要的，这里选择路由导航结束之后
      if (data instanceof NavigationEnd) {
        //获取当前路由配置
        this.path = data.url.substr(1);
      }
    })


  }

  change() {
  }

  navTo(url) {
    this.router.navigate([`/${url}`], {})
  }

}
