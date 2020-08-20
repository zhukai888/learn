import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less']
})
export class TopbarComponent implements OnInit {

  isCollapsed = false;

  routerPath = [];

  // 通过@Output实例化要传递向父组件的消息
  @Output() private outer = new EventEmitter();


  constructor(private router: Router, private route: ActivatedRoute) {

    this.getRoute();
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.getRoute();
      }
    });
  }

  /**
   * @author: 侠岚
   * @description: 侧边栏状态改变
   * @returns: {void}
   * @Date: 2020-07-28 14:49:45
   */
  changeIsCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.outer.emit(this.isCollapsed);
  }

  /**
   * @author: 侠岚
   * @description: 获取路由面包屑数据
   * @returns: {void}
   * @Date: 2020-07-28 16:16:47
   */
  getRoute(): void {
    this.routerPath = [];
    this.routerPath.push(this.route.snapshot.data.name);
    if (this.route.snapshot.children[0]) {
      this.routerPath.push(this.route.snapshot.children[0].data.name);
    }
  }

}
