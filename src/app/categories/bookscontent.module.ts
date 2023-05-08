import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookscontentRoutingModule } from './bookscontent-routing.module';
import { BookscontentComponent } from './bookscontent/bookscontent.component';


@NgModule({
  declarations: [
    BookscontentComponent
  ],
  imports: [
    CommonModule,
    BookscontentRoutingModule
  ]
})
export class BookscontentModule { }
