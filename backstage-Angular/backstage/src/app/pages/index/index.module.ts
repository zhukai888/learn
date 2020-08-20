import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// route
import { IndexRouting } from './index-routing';

// component
import { IndexComponent } from './index';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRouting
  ]
})
export class IndexModule { }
