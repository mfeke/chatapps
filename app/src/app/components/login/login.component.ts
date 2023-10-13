import { Component } from '@angular/core';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logo = "https://i.postimg.cc/66gTmTjY/logoch.png"
  email= 'Email address'
  password ="password"
  form = {
    username: "",
    password: ""
  }
  roles: string[] = [];
  constructor(private userService : UserService , private tokenStorage: TokenstorageService,
    private toastr: ToastrService, private route:Router ){}

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
        this.toastr.success('User is successfully Login!');
        this.route.navigate(['/home']);
        

      }
    })

  }

}
