import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../services/categories.interface';
import { CategoriesService } from '../services/categories.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  reactiveForm: FormGroup;
  hasError: boolean = false;
  errorMessages: string[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      category_name: new FormControl(null, Validators.required),
    });

    this.route.paramMap.subscribe((params) => {

      const id = params.get('id');
      this.http.get<Categories>('http://localhost:8000/categories/' + id).subscribe(response => {
        console.log(response);
        if (response) {
          this.reactiveForm.get('category_name').setValue(response.category_name);
          this.reactiveForm.get('id').setValue(response.id);
        }
      })
    });
  }


  onSubmit() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);

    const id = this.reactiveForm.get('id').value;
    const catName = { category_name: this.reactiveForm.get('category_name').value };
    this.categoriesService.updateCategory(id, catName).subscribe({
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
    this.hasError=false;
  }
}

