import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { Socket } from 'socket.io';
import { Message } from 'src/interfaces/messages';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server

  handleConnection() {
    console.log("connected");
  }

  handleDisconnect(client: Message) {
      console.log("disconnected")
  }

  @SubscribeMessage('sendMessage')
  handleMessage(client: Socket, message: Message) {    
    this.server.emit('newMessage', message);
  }
}
