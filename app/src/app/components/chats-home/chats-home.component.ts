import { Component } from '@angular/core';
import { ChatsService } from 'src/app/services/chats.service';
import { ChattingService } from 'src/app/services/chatting.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-chats-home',
  templateUrl: './chats-home.component.html',
  styleUrls: ['./chats-home.component.css']
})
export class ChatsHomeComponent {
  newMessage?:  string;
  messageList: string[] = [];



  isProfile = false;
  currentUser:any
  Users:any [] = []
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
  constructor( private tokenService: TokenstorageService, private chatService: ChatsService, private ChattingService: ChattingService){}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    // this.getAllUser()

    this.ChattingService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }
  
  toggle(){
    this.isProfile = !this.isProfile;
    alert('Asutin')
  }
  Logout():void{
    this.tokenService.signOut()
    window.location.assign("/login")

  }
  // getAllUser():void{
  //   this.chatService.getAllUser().subscribe(data=>{
  //    const filtedUsers = data.filter((x:any) =>  x._id !== this.currentUser._id)
  //    this.Users = filtedUsers

  //    console.log(this.Users)
      
  //   })

  // }

  sendMessage() {
    this.ChattingService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
