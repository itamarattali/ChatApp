import { OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nest/websockets';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Server } from 'http';
import { Socket } from 'socket.io';
import { Message } from '../../../../chat-client/src/interfaces/message';

@WebSocketGateway({ cors: {origin: ['http://localhost:4200']} })
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
  handleMessage(socket: Socket, message: Message) {
    this.server.emit('newMessage', message);
  }
}
