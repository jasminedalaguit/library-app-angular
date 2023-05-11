import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categories } from '../services/categories.interface';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/auth/logout/services/logout.service';
import { LoginService } from 'src/app/auth/login/services/login.service';
import { LoginInterface } from 'src/app/auth/login/services/login.interface';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  reactiveForm: FormGroup;

  categories: Array<Categories> = [];


  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private logoutService: LogoutService,) {}

  ngOnInit(): void {
     this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
     })

     this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
    
  onLogout() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    this.logoutService.userLogout().subscribe({
      next: data => {
      console.log(data)
      if(data) {
        sessionStorage.clear();
        this.router.navigate(['/auth/login']);
      }
    }
  })
}

  onDelete(id) {
    this.categoriesService.deleteCategory(id).subscribe(data => {
      console.log(data);
      if(data) {
        this.categoriesService.getCategories().subscribe(data => {
          this.categories = data;
        });
      } 
    });
  }
}
