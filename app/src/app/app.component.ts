import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
