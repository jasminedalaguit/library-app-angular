import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from './categories.interface';
import { ApiInterceptorService } from 'src/app/api-interceptor/api-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
 
  getCategories() {

    // TODO create an inteceptor na mo auto add ug authorization 
    // TODO inig logout e clear ang session storage ug ang api_key naa sa db
    // TODO crate ug guard na mo redirect sa login page if ang user is dli authenticated
  
    return this.http.get<Array<Categories>>('http://localhost:8000/categories', );
  }
  getCategoriesByID(id: { id: number }) {
    return this.http.get<Array<Categories>>('http://localhost:8000/categories' + id);
  }

  postCategory(data: { category_name: string }) {
    return this.http.post('http://localhost:8000/categories/create', data);
  }

  deleteCategory(id: { id: number }) {
    return this.http.delete('http://localhost:8000/categories/delete/' + id);
  }

  updateCategory(id: { id: number }, data: { category_name: string }) {
    return this.http.put('http://localhost:8000/categories/update/' + id, data);
  }
}
