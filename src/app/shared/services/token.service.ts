import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";

@Injectable({
    providedIn: 'root'
})

export class TokenService extends BaseService {

    private issuer = {
        login: this.baseUrl + '/login',
        register: this.baseUrl + '/register'
    }

    constructor() {
        super();
    }

    handleData(token) {
        localStorage.setItem('auth_token', token);
    }

    getToken() {
        return localStorage.getItem('auth_token');
    }

    // Verify the token
    isValidToken() {
        const token = this.getToken();

        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
            }
        } else {
            return false;
        }
    }

    payload(token) {
        const jwtPayload = token.split('.')[1];
        return JSON.parse(atob(jwtPayload));
    }

    // User state based on valid token
    isLoggedIn() {
        return this.isValidToken();
    }

    // Remove token
    removeToken() {
        localStorage.removeItem('auth_token');
    }

}
