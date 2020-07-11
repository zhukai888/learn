import { Output, EventEmitter,Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less']
})
export class TopbarComponent implements OnInit {

  //获取父组件的传值
  @Input() msg:string;

  @Input() runp:any;
  isCollapsed = false;
  @Output() private outer = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  run() {
    console.log("子组件跑动")
    this.runp();
  }

}
