import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// http 模块
import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { observable, Observable } from 'rxjs';
import { ApiConfigService } from '../services/api-config.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {

  // viewChild获取节点
  @ViewChild('container2') container2: any;
  constructor(private http: HttpClient, private router: Router, private apiConfigService: ApiConfigService) {
  }

  // 生命周期函数，页面进入触发
  ngOnInit(): void {
    this.apiConfigService.post('/App/get_system_article', { articleid: 5 });
    this.apiConfigService.post('/App/get_ads', { type: 1 });
    this.apiConfigService.post('/App/verify_code', { type: 1, mobile: 18758129692, code: 3888 });
  }

  // 试图加载完成，操作dom的方法放在这里面
  ngAfterViewInit(): void {

  }

}
