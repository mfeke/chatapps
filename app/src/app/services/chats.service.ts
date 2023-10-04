import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  api = "http://localhost:3300/chat/"

  

  constructor( private http: HttpClient, ) { }
  

  getAllUser():Observable<any>{
    return this.http.get<any>(this.api + "getAllUser", httpOptions)
  }
  sendMessage(message: string, from: string, to:string): Observable<any> {
    const apiUrl = `${this.api}send`;
  
    return this.http.post<any>(apiUrl, {from,to, message}, httpOptions);
  }
  getMessage (): Observable<any> {
    const apiUrl = `${this.api}/getMessage`;
    return this.http.get<any>(apiUrl);
  }
  
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.api+ 'signIn', { username,password}, httpOptions);
  }
}
