import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../services/categories.interface';
import { CategoriesService } from '../services/categories.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  reactiveForm: FormGroup;

  categories: Array<Categories> = [];
  errorMessage;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      category_name: new FormControl(null, Validators.required),
    });

    this.route.paramMap.subscribe((params) => {

      const catId = params.get('id');
      const catName = params.get('category_name');

      this.reactiveForm.get('id').setValue(catId);
      this.reactiveForm.get('category_name').setValue(catName);
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    const id = this.reactiveForm.get('id').value;
    const catName = { category_name: this.reactiveForm.get('category_name').value };
    this.categoriesService.updateCategory(id, catName).subscribe(data => {
      console.log(data);
      if (data = true) {
        this.router.navigate(['/admin/categories/categories']);
      }
    });
  }
}
