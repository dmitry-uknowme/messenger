import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessagePayload } from './message.payload';
import { MessageService } from './message.service';

// @Controller('/api/messages')
// export class MessageController {}
@Controller('/api/chats/:id/messages')
export class ChatMessageController {
  constructor(private messageService: MessageService) {}
  // @Post()
  // addChatMessage(
  //   @Param('id') id: ObjectId,
  //   @Body() payload: CreateMessagePayload,
  // ) {
  //   return this.messageService.addChatMessage(id, payload);
  // }

  // @Get()
  // getChatMessages(@Param('id') id: ObjectId) {
  //   return this.messageService.getChatMessages(id);
  // }

  // @Get(':msgId')
  // getChatMessage(@Param('id') id: ObjectId ,@Param('msgId')) {
  //   return this.messageService.getChatMessages(id);
  // }
  // getOne() {}
  // delete() {}
}
