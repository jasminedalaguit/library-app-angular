import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { AcademicComponent } from './academic/academic.component';
import { RomanceComponent } from './romance/romance.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HorrorComponent } from './horror/horror.component';
import { SuspenseComponent } from './suspense/suspense.component';


@NgModule({
  declarations: [
    AcademicComponent,
    RomanceComponent,
    FantasyComponent,
    HorrorComponent,
    SuspenseComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
