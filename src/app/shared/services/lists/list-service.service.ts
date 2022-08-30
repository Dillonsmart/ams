import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from "../base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ListServiceService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    userLists(): Observable<any> {
        return this.http.get(this.baseUrl + '/lists');
    }

    getList(id: number): Observable<any> {
        return this.http.get(this.baseUrl + '/lists/view/' + id);
    }

    createList(list: object) {
        return this.http.post(this.baseUrl + '/lists/create', list);
    }

}
