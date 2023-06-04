import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl =  "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) {}

  signup(name: string, email: string, password: string): Observable<any> {
    const body = {
      name: name,
      email: email,
      password: password
    };

    return this.http.post(`${this.apiUrl}/auth/register`, body);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/auth/login`, loginData);
  }

  signOut(): Observable<any> {
    return this.http.post(`${this.apiUrl}/signout`, {});
  }
}
