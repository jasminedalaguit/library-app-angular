import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'auth/signup', component: SignupComponent },
  { path:'auth/login', component: LoginComponent },
  { path:'auth/logout', component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
