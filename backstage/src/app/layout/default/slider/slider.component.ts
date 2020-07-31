import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { of, Observable, from, fromEvent, interval } from 'rxjs';
import { map, filter, merge, max, min, scan, tap, reduce } from 'rxjs/operators';


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
    this.routeList = this.router.config.filter(item => item.data && item.data.hidden !== true);

    // 首次展开当前路由的二级菜单
    const list = this.routeList;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < list.length; i++) {
      if (!list[i].data.only && list[i].path === this.path[0]) {
        // tslint:disable-next-line: prefer-for-of
        for (let a = 0; a < list[i].children.length; a++) {
          if (list[i].children[a].path === this.path[1]) {
            list[i].open = true;
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
      this.routeList.forEach((route, index) => {
        if (i === index) {
          route.open = true;
        } else {
          route.open = false;
        }
      });
    }
  }

}
