import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-home',
  templateUrl: './chats-home.component.html',
  styleUrls: ['./chats-home.component.css']
})
export class ChatsHomeComponent {

  isProfile = false;

  Naruto={
    name:"Naruto",
    about:"NarutoUzumaki@gmail.com",
    image:"https://i.postimg.cc/yYwg4pLC/images.jpg"
  }
  Kakashi={
    name:"Xhanti",
    about:"online",
    image:"https://i.postimg.cc/d1YmTL9W/Kakashi-Hatake-1.webp"
  }

  toggle(){
    this.isProfile = !this.isProfile;
    alert('Asutin')
  }
}
