import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BookscontentModule } from './categories/bookscontent.module';
import { ApiInterceptorService } from './api-interceptor/api-interceptor.service';





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
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptorService,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
