import { Component } from '@angular/core';
import { concatAll } from 'rxjs';
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
  msg:any[]=[]


  selectedUser?:any
  currentUser:any
  Users:any [] = []

  constructor( private tokenService: TokenstorageService, private chatService: ChatsService, private ChattingService: ChattingService){}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    this.getAllUser()
    // this.getMessage()
    this.ChattingService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
      // this.messageList = [""]
    })
  }
  

  Logout():void{
    this.tokenService.signOut()
    window.location.assign("/login")

  }
  getAllUser():void{
    this.chatService.getAllUser().subscribe(data=>{
     const filtedUsers = data.filter((x:any) =>  x.username !== this.currentUser.username)
     this.Users = filtedUsers
      
    })
  }
  
  onSelectedUser(user:any):void{
    this.selectedUser = user
    
    localStorage.setItem("user",JSON.stringify(this.selectedUser))
    
  }


sendMessage() {
    this.ChattingService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}
