import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from "../base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TaskServiceService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    createTask(task: object): Observable<any> {
        return this.http.post(this.baseUrl + '/tasks/create', task);
    }

    getTask(task: number) {
        return this.http.get(this.baseUrl + '/tasks/view/' + task);
    }

}
