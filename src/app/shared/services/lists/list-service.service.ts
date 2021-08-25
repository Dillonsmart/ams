import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) {

  }

  userLists(): Observable<any> {
    return this.http.get('http://ams-api.local/api/lists');
  }

  getList(id: number): Observable<any> {
    return this.http.get('http://ams-api.local/api/lists/' + id);
  }

}
