import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenstorageService } from './tokenstorage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  api = "http://localhost:3300/chat/"

  

  constructor( private http: HttpClient, private tokenService: TokenstorageService) { }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.api+ 'signIn', { username,password}, httpOptions);
  }
  
  gethome():Observable<any>{
    return this.http.get<any>(this.api+ 'get', httpOptions);

  }

}
