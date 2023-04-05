import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Categories } from '../services/categories.interface';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';

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
    private router: Router) {}

  ngOnInit(): void {
     this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
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
