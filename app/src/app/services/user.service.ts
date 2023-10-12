import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
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

  search(Search:string):Observable<any>{
    if (!Search.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<any>(this.api+ 'getSearch/' + Search, httpOptions).pipe(
      tap(x => x.length ?
        console.log(`found users matching "${Search}"`) :
        console.log(`no users matching "${Search}"`)),
      catchError(this.handleError<any[]>('searchUsers', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 

  register(username: string,  password: string): Observable<any> {
    return this.http.post(this.api+ 'signUp', {
      username,
      password,
    }, httpOptions);
  }
}
