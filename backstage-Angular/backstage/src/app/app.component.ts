import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.less']
})
export class AppComponent  implements OnInit{

  isCollapsed = false;

  ngOnInit(): void {

  }
}
