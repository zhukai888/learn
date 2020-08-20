import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { errorComponent } from './404';

// router
import { ErrorRoutingModule } from './404-routing';

@NgModule({
  declarations: [errorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
  ],
})
export class ErrorModule { }
