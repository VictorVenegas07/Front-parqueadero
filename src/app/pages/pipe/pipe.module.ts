import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from './paginate.pipe';



@NgModule({
  declarations: [
    PaginatePipe
  ],
  exports: [PaginatePipe],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
