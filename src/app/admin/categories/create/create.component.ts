import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesCreate } from '../services/categories.interface';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  reactiveForm: FormGroup;

  category: Array<CategoriesCreate> = [];
  errorMessage;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      category_name: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    this.categoriesService.postCategory(this.reactiveForm.value).subscribe(data => {
      console.log(data);
      if(data = true) {
        this.router.navigate(['/admin/categories/categories']);
      } 
    });
  }

}
