import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://randomuser.me/api";

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.url)
  }
}
