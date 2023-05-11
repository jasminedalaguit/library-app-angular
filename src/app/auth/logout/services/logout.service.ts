import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../../login/services/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  userLogout() {
    return this.http.post<{status: string}>('http://localhost:8000/api/logout', {});
  }
}
