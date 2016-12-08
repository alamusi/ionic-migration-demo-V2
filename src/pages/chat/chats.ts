import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Chat } from '../../services/chat';
import { ChatService } from '../../services/chat.service';
import { ChatDetailPage } from './chat-detail';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  chats: Chat[];
  constructor(public navCtrl: NavController, public cs: ChatService) {

  }

  ngOnInit() {
    this.chats = this.cs.all();
  }

  show(chat:Chat) {
    this.navCtrl.push(ChatDetailPage, {chat:chat});
  }
  
  remove(chat:Chat) {
    this.cs.remove(chat);
  }
}
