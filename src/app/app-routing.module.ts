import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule), path: '', },
  { loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule), path: '', },
  { loadChildren: () => import('./categories/bookscontent-routing.module').then(m => m.BookscontentRoutingModule), path: '', },
  { loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule), path: '', },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
