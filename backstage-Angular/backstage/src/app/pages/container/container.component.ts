import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// http 模块
import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { observable, Observable } from 'rxjs';
import {ApiConfigService} from '../services/api-config.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {

  //viewChild获取节点
  @ViewChild('container2') container2: any;

  constructor(private http: HttpClient, private router: Router, private apiConfigService: ApiConfigService) {

  }



  // 生命周期函数，页面进入触发
  ngOnInit(): void {
    this.apiConfigService.xhttp('post', '/api/App/get_system_article', { articleid: 5 });
  }

  // 试图加载完成，操作dom的方法放在这里面
  ngAfterViewInit(): void {

  }

  // change() {
  //   let res = this.http.request('GET', "api/a").subscribe((res) => {
  //     console.log(res)
  //   });
  // }

  // translation() {
  //   this.container2.nativeElement.style.transform = 'translate(100%,0)'
  // }

  // navTo() {
  //   this.router.navigate(["/login"], {})
  // }


}