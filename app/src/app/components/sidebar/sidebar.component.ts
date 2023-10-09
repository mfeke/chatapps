import { Component } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router

import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private tokenService:TokenstorageService,private route:Router ){}

  Logout():void{
    this.tokenService.signOut()
    this.route.navigate(['/login']);

  }

}
