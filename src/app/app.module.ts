import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BookscontentModule } from './categories/bookscontent.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HomeModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule,
    BookscontentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
