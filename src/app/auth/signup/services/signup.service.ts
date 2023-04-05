import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupInterface } from './signup.interface';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  user: Array<SignupInterface> = [];
  constructor(private http:HttpClient) {}
  postUser(params: SignupInterface) {
    return this.http.post('http://localhost:8000/users/create', params);
  }
}
