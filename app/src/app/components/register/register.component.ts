import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form= {
    username: "",
    image: "",
    password: ""

  
  }
  constructor(private userService: UserService ) { }

  onSubmit(): void {
    const { username, image, password } = this.form;

    this.userService.register(username, image , password).subscribe({
      next: data => {
        console.log(data);
      },
    })
    
  }
}
