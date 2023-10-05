import { Component } from '@angular/core';
import { ChatsService } from 'src/app/services/chats.service';
import { Input ,OnChanges, SimpleChanges } from '@angular/core';
import { ChattingService } from 'src/app/services/chatting.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';
import { ChatsHomeComponent } from '../chats-home/chats-home.component';
import { from } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-chats-message',
  templateUrl: './chats-message.component.html',
  styleUrls: ['./chats-message.component.css']
})
export class ChatsMessageComponent  {

  isProfile = false;
  selected!:any
  currentUser:any
  message = ""
  msgs: any = [];
  container:any
  data = {
    user:"",
    text:"",
    to:""
  }
  @Input() user1: any;

  constructor(private tokenService: TokenstorageService, private chatService: ChatsService, private ChattingService: ChattingService, private home: ChatsHomeComponent){}
 
  ngOnChanges() {
    if(this.user1){
      this.selected = this.user1
      console.log(this.selected)
      this.msgs =  this.container.filter((data:any)=> data.users.some((x:any)=> x == this.currentUser.username && data.users[1] == this.selected.username)  )
      // console.log(this.msgs)
    }
 
  }
  
  ngOnInit() {
    this.currentUser = this.tokenService.getUser();
    
    this.ChattingService.getNewMessage().subscribe((message: string) => {
      const msg1: any[] = []
      if(message){
        this.msgs = msg1
         msg1.push(JSON.parse(message))  
          console.log(msg1)
      }
    })


    this.chatService.getMessage().subscribe(data=>{
      this.container = data
      console.log(data)
    })
  }
  
  

  send():void{
    this.data.text= this.message
    this.data.user= this.currentUser.username
    this.data.to = this.selected.username 
    console.log(this.data)
  // // this.chatService.sendMessage( this.currentUser.username,this.user1.username).subscribe(data=>{
    this.ChattingService.sendMessage(JSON.stringify(this.data));

  // this.message = ''
  // })
    
  }
}
