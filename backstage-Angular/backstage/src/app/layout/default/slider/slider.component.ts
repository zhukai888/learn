import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { GlobalInfoService } from '../../../common/services/globalInfo.service';


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


  constructor(private router: Router, private planform: PlatformLocation, private global: GlobalInfoService) {
    this.routeList = this.global.routeList;
  }

  ngOnInit(): void {
    // 获取当前路由配置
    this.path = this.planform.hash.substr(2).split('/');

    // 首次展开当前路由的二级菜单
    const list = this.routeList;
    for (const route of this.routeList) {
      if (!route.data.only && route.path === this.path[0]) {
        for (const child of route.children) {
          if (child.path === this.path[1]) {
            route.open = true;
            return;
          }
        }
      }
    }
  }

  /**
   * @author: 侠岚
   * @description: 侧边栏展开操作
   * @param： {number} i 索引
   * @param： {boolean} type 是否展开
   * @returns: {void}
   * @Date: 2020-07-28 16:36:33
   */
  changeOpen(i: number, type: boolean): void {
    if (type) {
      this.routeList.forEach((route: any, index: number) => {
        route.open = i === index ? true : false;
      });
    }
  }

}
