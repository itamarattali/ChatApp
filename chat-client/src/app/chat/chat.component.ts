import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Message } from '../../interfaces/message';
import { LoginService } from '../login.service';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  name: string = '';
  currentMessage: string = '' ;
  messages: Message[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.name = this.loginService.getName();
  }

  updateCurrentMessage(event: any) {
    this.currentMessage = event.target.value;
  }

  handleSubmitNewMessage() {
    const messageObj: Message = {time: this.getTime(), 
      text: this.currentMessage, name: this.name}
    this.messages.push(messageObj);
    this.currentMessage = '';
  }

  getTime(): string {
    const now = moment(new Date()).format('HH:mm');
    return now.toString();
  }

  stringifyTime(date: Date): string {
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(); 
    return `${hours}:${minutes}`;
  }
}