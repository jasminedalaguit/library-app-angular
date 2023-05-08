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
  hasError: boolean = false;
  errorMessages: string[] = [];

  category: Array<CategoriesCreate> = [];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      category_name: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    this.categoriesService.postCategory(this.reactiveForm.value).subscribe({
      next: data => {
        console.log(data);
        if (data) {
          this.router.navigate(['/admin/categories/categories']);
        }
      }, error: (result) => {
        console.log('oops', result.error);
        this.hasError = true;

        for (let messages of Object.values(result.error)) {
          console.log(messages);

          if (Array.isArray(messages)) {
            for (let index = 0; index < messages.length; index++) {
              const message = messages[index];
              this.errorMessages.push(message)
            }
          }
        }
      }
    });
  }
  closeMessage() {
    this.hasError = false;
  }
}
