import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from './categories/categories/categories.component';
import { BooksComponent } from './books/books/books.component';
import { CreateComponent } from './categories/create/create.component';
import { EditComponent } from './categories/edit/edit.component';
import { DeleteComponent } from './categories/delete/delete.component';
import { DeletebooksComponent } from './books/deletebooks/deletebooks.component';
import { CreatebooksComponent } from './books/createbooks/createbooks.component';
import { EditbooksComponent } from './books/editbooks/editbooks.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CategoriesComponent,
    BooksComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DeletebooksComponent,
    CreatebooksComponent,
    EditbooksComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],

})
export class AdminModule { }
