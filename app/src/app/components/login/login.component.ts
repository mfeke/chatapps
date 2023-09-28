import { Component } from '@angular/core';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = {
    username: "",
    password: ""
  }
  roles: string[] = [];
  constructor(private userService : UserService , private tokenStorage: TokenstorageService){}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      console.log(this.roles)
    }
   
  }

  Login():void {
    const { username, password} = this.form
    this.userService.login(username,password).subscribe({
      next: data=>{
        console.log(data)
        this.tokenStorage.saveToken(data.accesstoken);
        this.tokenStorage.saveUser(data);
        window.location.assign("/home")

      }
    })

  }
}