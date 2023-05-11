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
import { AuthGuard } from '../auth.guard';


const routes: Routes = [

  { path: 'admin/categories/categories', component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: 'admin/books/books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'admin/categories/create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'admin/categories/edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'admin/categories/delete', component: DeleteComponent, canActivate: [AuthGuard] },
  { path: 'admin/books/createbooks', component: CreatebooksComponent, canActivate: [AuthGuard] },
  { path: 'admin/books/editbooks/:id', component: EditbooksComponent, canActivate: [AuthGuard] },
  { path: 'admin/books/deletebooks', component: DeletebooksComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
