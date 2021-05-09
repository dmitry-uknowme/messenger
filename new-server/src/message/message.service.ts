import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Chat, ChatDocument } from 'src/chat/chat.schema';
import { CreateMessagePayload } from './message.payload';
import { Message, MessageDocument } from './message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
  ) {}
  async addChatMessage(id: ObjectId, payload: CreateMessagePayload) {
    const chat = await this.chatModel
      .findById(id)
      .populate([{ path: 'messages', model: 'Message' }]);

    const message = await this.messageModel.create({
      ...payload,
      date: Date.now().toString(),
    });
    chat.messages.push(message._id);
    await chat.save();
    return chat;
  }
  async getChatMessages(id: ObjectId) {
    const chat = await this.chatModel
      .findById(id)
      .populate([{ path: 'messages', model: 'Message' }]);
    return chat.messages;
  }
  async getOne() {}
  async delete() {}
}
