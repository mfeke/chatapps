import { Component } from '@angular/core';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-chats-home',
  templateUrl: './chats-home.component.html',
  styleUrls: ['./chats-home.component.css']
})
export class ChatsHomeComponent {

  isProfile = false;

  currentUser:any

  Naruto={
    name:"Lulama",
    about:"online",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U5LakdIoyhxWRiuw47zH9E-enVVAn58GRhYhDQuvTSJNcGLLKb3eiu-dTMn1Q3UjP8k&usqp=CAU"
  }

  Kakashi={
    name:"Austin",
    about:"online",
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
  }

  Austin={
    name:"Xhanti",
    about:"online",
    image:"https://i.postimg.cc/d1YmTL9W/Kakashi-Hatake-1.webp"
  }
  constructor( private tokenService: TokenstorageService){}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    console.log(this.currentUser)
  }
  toggle(){
    this.isProfile = !this.isProfile;
    alert('Asutin')
  }
  Logout():void{
    this.tokenService.signOut()
    window.location.assign("/login")

  }

 
}
