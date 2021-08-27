import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) {

  }

  createTask(task: object): Observable<any> {
    return this.http.post('http://ams-api.local/api/tasks/create', task);
  }

  getTask(task: number) {
    return this.http.get('http://ams-api.local/api/tasks/view/' + task);
  }

}
