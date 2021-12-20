import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentMessage: string = '';

  messages: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateCurrentMessage(event: any) {
    this.currentMessage = event.target.value;
    console.log(this.currentMessage);
  }

  handleSubmitNewMessage() {
    this.messages.push(this.currentMessage);
  }
}