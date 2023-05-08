import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { HttpClient } from '@angular/common/http';
import { BooksInterface } from '../services/books.interface';
import { CategoriesService } from '../../categories/services/categories.service';
import { Categories } from '../../categories/services/categories.interface';

@Component({
  selector: 'app-editbooks',
  templateUrl: './editbooks.component.html',
  styleUrls: ['./editbooks.component.scss']
})
export class EditbooksComponent implements OnInit {
  reactiveForm: FormGroup;
  hasError: boolean = false;
  errorMessages: string[] = [];
  books: Array<BooksInterface> = [];
  categories: Array<Categories> = [];

  constructor(
    private booksService: BooksService,
    private categoriesService: CategoriesService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      book_title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      category_id: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
    });

    this.route.paramMap.subscribe((params) => {

      const id = params.get('id');
      this.http.get<BooksInterface>('http://localhost:8000/books/' + id).subscribe(response => {
        console.log(response);
        if (response) {
          this.reactiveForm.get('id').setValue(response.id);
          this.reactiveForm.get('book_title').setValue(response.book_title);
          this.reactiveForm.get('author').setValue(response.author);
          this.reactiveForm.get('category_id').setValue(response.category_id);
        }
      })
    });
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.reactiveForm.patchValue({
      file: file
    });
    this.reactiveForm.get('file').updateValueAndValidity()
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);

    const id = this.reactiveForm.get('id').value;
    const formData = new FormData();
    formData.append("file", this.reactiveForm.get('file').value);
    this.booksService.uploadBooks(formData).subscribe(data => {
      console.log(data)
      if (data) {
        const bookData = {
          book_title: this.reactiveForm.get('book_title').value,
          author: this.reactiveForm.get('author').value,
          category_id: this.reactiveForm.get('category_id').value,
          file_id: data.file_id
        };
        this.http.put<BooksInterface>('http://localhost:8000/books/update/' + id, bookData).subscribe({
          next: response => {
            console.log(response);
            if (response) {
              this.router.navigate(['/admin/books/books']);
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
    });
  }
  closeMessage(){
    this.hasError = false;
  }
}
