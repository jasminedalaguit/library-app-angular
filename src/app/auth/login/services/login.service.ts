import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Array<LoginInterface> = [];
  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('lib_key');
  }
  userLogin(params: LoginInterface) {
    return this.http.post<{ api_key: string, status: string }>('http://localhost:8000/api/login', params);
  }
}
