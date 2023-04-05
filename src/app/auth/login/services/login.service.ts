import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Array<LoginInterface> = [];
  constructor(private http: HttpClient) { }

  userLogin(params: LoginInterface) {
    return this.http.post('http://localhost:8000/users/login', params);
  }
}
