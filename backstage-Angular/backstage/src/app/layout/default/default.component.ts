import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {

  isCollapsed: false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @author: 侠岚
   * @description: 子组件传回方法
   * @param: {data} 子组件传回的isCollapsed的值
   * @Date: 2020-08-19 17:15:27
   */
  handlerChild(data): void {
    this.isCollapsed = data;
  }

}
