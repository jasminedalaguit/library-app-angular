import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeletebooksComponent } from '../deletebooks/deletebooks.component';
import { BooksInterface } from './books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<BooksInterface> = [];
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Array<BooksInterface>>('http://localhost:8000/books');
  }
  uploadBooks(file: FormData) {
    return this.http.post('http://localhost:8000/upload', file);
  }
 
  deleteBooks(id: {id: number}) {
    return this.http.delete('http://localhost:8000/books/delete/' +id);
  }
}
