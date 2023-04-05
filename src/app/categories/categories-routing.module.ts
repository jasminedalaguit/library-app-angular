import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HorrorComponent } from './horror/horror.component';
import { RomanceComponent } from './romance/romance.component';
import { SuspenseComponent } from './suspense/suspense.component';

const routes: Routes = [
  { path:'categories/academic', component: AcademicComponent},
  { path:'categories/romance', component: RomanceComponent},
  { path:'categories/fantasy', component: FantasyComponent},
  { path:'categories/suspense', component: SuspenseComponent},
  { path:'categories/horror', component: HorrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
