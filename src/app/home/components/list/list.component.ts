import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/admin/categories/services/categories.interface';
import { CategoriesService } from 'src/app/admin/categories/services/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  categories: Array<Categories> = [];

  constructor(private categoriesService: CategoriesService,) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })
 
  }

}
