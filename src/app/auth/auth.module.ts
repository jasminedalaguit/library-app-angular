import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { LinksComponent } from '../links/links.component';
import { AdminModule } from '../admin/admin.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    LogoutComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],

})
export class AuthModule { }
