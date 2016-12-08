import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  enableFriends = true;
  constructor(public navCtrl: NavController) {

  }

}
