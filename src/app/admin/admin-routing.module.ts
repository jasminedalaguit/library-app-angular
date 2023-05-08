import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books/books.component';
import { CreatebooksComponent } from './books/createbooks/createbooks.component';
import { DeletebooksComponent } from './books/deletebooks/deletebooks.component';
import { EditbooksComponent } from './books/editbooks/editbooks.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CreateComponent } from './categories/create/create.component';
import { DeleteComponent } from './categories/delete/delete.component';
import { EditComponent } from './categories/edit/edit.component';


const routes: Routes = [
  { path:'admin/categories/categories', component:CategoriesComponent },
  { path:'admin/books/books', component:BooksComponent },
  { path:'admin/categories/create', component:CreateComponent },
  { path:'admin/categories/edit/:id', component:EditComponent },
  { path:'admin/categories/delete', component:DeleteComponent },
  { path:'admin/books/createbooks', component:CreatebooksComponent },
  { path:'admin/books/editbooks/:id', component:EditbooksComponent },
  { path:'admin/books/deletebooks', component:DeletebooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
