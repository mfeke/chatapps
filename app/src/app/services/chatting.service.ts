import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})


export class ChattingService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  socket = io('http://localhost:3300');

  public sendMessage(message: string | undefined) {
    this.socket.emit('chat message', message);
  }
  public getNewMessage = () => {
    this.socket.on('chat message', (message: string) => {
      this.message$.next(message)
    })

    return this.message$.asObservable();

  }
}
