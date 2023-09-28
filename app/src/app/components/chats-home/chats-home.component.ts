import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-home',
  templateUrl: './chats-home.component.html',
  styleUrls: ['./chats-home.component.css']
})
export class ChatsHomeComponent {

  isProfile = false;

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

  toggle(){
    this.isProfile = !this.isProfile;
    alert('Asutin')
  }
}
