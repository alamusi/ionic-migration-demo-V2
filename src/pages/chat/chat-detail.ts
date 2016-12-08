import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Chat } from '../../services/chat';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'page-chat-detail',
  templateUrl: 'chat-detail.html'
})
export class ChatDetailPage {

  chat: Chat;
  constructor(public navCtrl: NavController, public params: NavParams, public cs: ChatService) {

  }

  ngOnInit() {
    this.chat = this.params.get('chat');
  }

  remove(chat:Chat) {
    this.cs.remove(chat);
  }
}
