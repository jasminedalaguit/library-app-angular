import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { BooksInterface } from '../services/books.interface';
import { Router } from '@angular/router';
import { CategoriesService } from '../../categories/services/categories.service';
import { Categories } from '../../categories/services/categories.interface';

@Component({
  selector: 'app-createbooks',
  templateUrl: './createbooks.component.html',
  styleUrls: ['./createbooks.component.scss']
})
export class CreatebooksComponent implements OnInit {
  reactiveForm: FormGroup;
  hasError: boolean = false;
  errorMessages: string[] = [];

  categories: Array<Categories> = [];
  books: Array<BooksInterface> = [];
  constructor(
    private booksService: BooksService,
    private http: HttpClient,
    private router: Router, 
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      book_title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      category_id: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
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
        this.http.post('http://localhost:8000/books/create', bookData).subscribe({
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
  closeMessage() {
    this.hasError = false;
  }
}