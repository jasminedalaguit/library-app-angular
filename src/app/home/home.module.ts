import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { InquiriesComponent } from './components/inquiries/inquiries.component';
import { AboutComponent } from './components/about/about.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { ContactsComponent } from './components/contacts/contacts.component';



@NgModule({
  declarations: [

    HomeComponent,
    TopBarComponent,
    MenuComponent,
    ListComponent,
    InquiriesComponent,
    AboutComponent,
    DeveloperComponent,
    ContactsComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
