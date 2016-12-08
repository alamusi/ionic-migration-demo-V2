import {Injectable} from '@angular/core';
import {Chat} from './chat';

import {remove as _remove} from 'lodash';

@Injectable()
export class ChatService {

  chats: Chat[] = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'assets/img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'assets/img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'assets/img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'assets/img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'assets/img/mike.png'
  }];
  
  all() {
    return this.chats;
  }

  remove(chat: Chat) {
    _remove(this.chats, n => {
      return chat == n;
    });
  }

  get(id: number) {
    for (let i=0; i<this.chats.length; i++) {
      if (this.chats[i].id == id) {
        return this.chats[i];
      }
    }
    return null;
  }
}
