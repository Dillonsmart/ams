import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AuthService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    // User registration
    register(user: User): Observable<any> {
        return this.http.post(this.baseUrl + '/login', user);
    }

    // Login
    signin(user: User): Observable<any> {
        console.log(this.baseUrl);
        return this.http.post<any>(this.baseUrl + '/login', user);
    }

    // Access user profile
    profileUser(): Observable<any> {
        return this.http.get(this.baseUrl + '/user');
    }

}

// User interface
export class User {
    name: String;
    email: String;
    password: String;
    password_confirmation: String
}
