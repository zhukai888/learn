import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {


  @ViewChild('topbar') topbar: any;

  public msg = 'topbar12112'
  constructor() { }

  ngOnInit(): void {
  }

  runp() {
    console.log("狗比")
  }
  ngAfterViewInit(): void {
    this.topbar.run()
  }
}
