import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {

  }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://ams-api.local/api/login', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://ams-api.local/api/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://ams-api.local/api/user');
  }

}

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}