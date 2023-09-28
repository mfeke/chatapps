import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  api = "http://localhost/3300/chat"

  

  constructor( private http:HttpClient) { }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.api+ 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, image: string, password: string): Observable<any> {
    return this.http.post(this.api+ 'signUp', {
      username,
      password
    }, httpOptions);
  }
}
