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
}
