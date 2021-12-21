import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Message } from '../../interfaces/message';
import { LoginService } from '../login.service';

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
    const now = new Date();
    return this.stringifyTime(now);
  }

  stringifyTime(date: Date): string {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
}