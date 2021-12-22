import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Message } from "src/interfaces/message";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private socket: Socket) { }

    sendMessage(message: Message) {
        console.log(1);
        
        this.socket.emit('sendMessage', message);
    }

    getNewMessage(): Observable<Message> {
        return this.socket.fromEvent('newMessage');
    }
}