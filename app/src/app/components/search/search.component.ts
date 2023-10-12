import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search$!: Observable<any[]>;
  private searchTerms = new Subject<string>();

  constructor(private userService: UserService, private http: HttpClient ){}
 
  ngOnInit(): void {

    this.search$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.search(term)),
    );
 
}
  
  
  onSearch(term: string):any {
    // this.searchTerms.next(term);
    this.searchTerms.next(term);
   }

}
