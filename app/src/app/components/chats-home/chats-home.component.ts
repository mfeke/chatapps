import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { Observable, concatAll, from, subscribeOn } from 'rxjs';
import { ChatsService } from 'src/app/services/chats.service';
import { ChattingService } from 'src/app/services/chatting.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-chats-home',
  templateUrl: './chats-home.component.html',
  styleUrls: ['./chats-home.component.css']
})
export class ChatsHomeComponent {
  msgList:any=[]
  container:any
  message = ""

  selectedUser?:any
  currentUser:any
  Users:any [] = []
  chatlink = true
  editlink = false
  profilelink = false
  http: any;



  constructor(  private userService: UserService, private tokenService: TokenstorageService, private chatService: ChatsService, private ChattingService: ChattingService){}


  ngOnChanges() {


  }
  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    console.log(this.currentUser)
    this.getAllUser()

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
      console.log(array)
    }

  }
 onProfile(){
  this.chatlink = false
  this.profilelink = true
  this.editlink =false
 }
 onChat(){
   this.chatlink = true
   this.profilelink = false
   this.editlink =false



 }
  onEdit(){
    this.chatlink = false
    this.profilelink = false
    this.editlink =true

  }

  sendMessage():void{
    const data:any = {
      text:this.message,
      users:[this.currentUser.username, this.selectedUser.username],
      sender:this.currentUser.username
    }
    this.msgList.push(data)
    console.log(data)
  this.chatService.sendMessage(this.message, this.currentUser.username,this.selectedUser.username).subscribe(data =>{
    console.log(data)
  })
  this.ChattingService.sendMessage(JSON.stringify(data))
  this.message = ''
  }

  deteleMessage(msg:any){
    const id:number = msg._id
    this.chatService.deteleMessageById(id).subscribe(data=>{
      console.log(data)
    })
  }
  update(){
    // const id = this.currentUser.id
    // console.log(id)
    this.userService.update(this.currentUser.id, this.currentUser.username, this.currentUser.email, this.currentUser.image,this.currentUser.number).subscribe(data=>{
      console.log(data)
    })
  }
  // update(username: string, number: number, ema:il: string): Observable<any> {
  //   return this.http.put<any>(this.api+ 'profile', { username,number, email}, httpOptions);
  // }
  }




