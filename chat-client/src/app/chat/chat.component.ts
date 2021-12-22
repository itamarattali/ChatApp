import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Message } from '../../interfaces/message';
import { LoginService } from '../services/login.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  name: string = '';
  currentMessage: string = '' ;
  messages: Message[] = [];
  newMessage$: Observable<Message>;

  constructor(private loginService: LoginService, private chatService: ChatService) { }

  ngOnInit(): void {
    this.name = this.loginService.getName();
    this.chatService.getNewMessage().subscribe((message: Message) => {
      this.messages.push(message);
    })
  }

  sendMessage() {
    const message: Message = {time: this.getTime(), text: this.currentMessage, name: this.name};
    this.currentMessage = '';
    this.chatService.sendMessage(message);
  }

  getTime(): string {
    const now = moment().format('HH:mm');
    return now.toString();
  }
}