import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
  isCollapsed: false;
  constructor() { }

  handlerChild(data) {
    this.isCollapsed = data;
  }

  ngOnInit(): void {
  }

}
