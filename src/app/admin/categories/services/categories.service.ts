import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from './categories.interface';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get<Array<Categories>>('http://localhost:8000/categories');
  }
  getCategoriesByID(id: {id: number}) {
    return this.http.get<Array<Categories>>('http://localhost:8000/categories' +id);
  }

  postCategory(data: { category_name: string}) {
    return this.http.post('http://localhost:8000/categories/create', data);
  }

  deleteCategory(id: {id: number}) {
    return this.http.delete('http://localhost:8000/categories/delete/' +id);
  }

  updateCategory(id: {id: number}, data: {category_name: string}) {
    return this.http.put('http://localhost:8000/categories/update/' +id, data);
  }
}
