import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookscontentComponent } from './bookscontent/bookscontent.component';

const routes: Routes = [
  { path:'categories/bookscontent/:id', component: BookscontentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookscontentRoutingModule { }
