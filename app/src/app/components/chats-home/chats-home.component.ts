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
  messageList: string[] = [];
  msgList:any=[]
  container:any
  message = ""

  selectedUser?:any
  currentUser:any
  Users:any [] = []

  constructor( private tokenService: TokenstorageService, private chatService: ChatsService, private ChattingService: ChattingService){}
  

  ngOnChanges() {
    
  
 
  }
  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    console.log(this.currentUser)
    this.getAllUser()
    // this.ChattingService.getNewMessage().subscribe((message: string) => {
    //   this.messageList.push(message);
    // })

    this.chatService.getMessage().subscribe(data=>{
      this.container = data
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
    if(this.selectedUser){
      let array = []
      array = this.container.filter((data:any)=> data.users.some((x:any)=> x == this.selectedUser.username &&this.currentUser.username))
      this.msgList = array
    }
    
  }


sendMessage() {

// this.chatService.sendMessage(th)
    // this.ChattingService.sendMessage(this.newMessage);
    // this.newMessage = '';
  }

}
