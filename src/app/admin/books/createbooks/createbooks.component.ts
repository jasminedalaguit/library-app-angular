import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { BooksInterface } from '../services/books.interface';


@Component({
  selector: 'app-createbooks',
  templateUrl: './createbooks.component.html',
  styleUrls: ['./createbooks.component.scss']
})
export class CreatebooksComponent implements OnInit {
  reactiveForm: FormGroup;

  books: Array<BooksInterface> = [];
  constructor(
    private booksService: BooksService,
    private http: HttpClient) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      book_title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      category_id: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
    });
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
        const bookData =
          [this.reactiveForm.get('book_title').value,
          this.reactiveForm.get('author').value,
          this.reactiveForm.get('category_id').value,
          data];
        this.http.post('http://localhost:8000/books/create', bookData).subscribe();
      }
    });
  }
}