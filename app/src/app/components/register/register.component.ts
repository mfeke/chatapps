import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'; // import router from angular router




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  logo = "https://i.postimg.cc/66br41Cb/thetha-removebg-preview.png"
  email= 'Email address'
  password ="password"

  form= {
    username: "",
    image: "",
    password: ""

  
  }
  constructor(private userService: UserService, private toastr: ToastrService, private route:Router ) { }

  onSubmit(): void {
    const { username, image, password } = this.form;
    if(!image && !password && !username){
      this.toastr.error('Invaid Details ');
      return
     }
    if(!username){
     this.toastr.error('Invaid Username');
      return
    }
    if(!password){
      this.toastr.error('Invaid Password');
       return
     }

     console.log(image)
   
    console.log(101)
    this.userService.register(username, image , password).subscribe({
      next: data => {
        console.log(data);
        this.toastr.success('User was registered successfully!');
        this.route.navigate(['/login']);
      },
      
    })
    

    
  }


}
