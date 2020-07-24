import { Output, EventEmitter, Input, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less']
})
export class TopbarComponent implements OnInit {

  isCollapsed = false;

  // 通过@Output实例化要传递向父组件的消息
  @Output() private outer = new EventEmitter();

  handlerClick(){
    this.isCollapsed = !this.isCollapsed;
    this.outer.emit(this.isCollapsed);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
