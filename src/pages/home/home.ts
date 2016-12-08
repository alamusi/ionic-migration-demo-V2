import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { AppVersion, getPlugin } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  appName:string;
  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      if (getPlugin('cordova.getAppVersion')) {
        AppVersion.getAppName().then(name=>{
          this.appName = name;
        });
      }
    });
  }
}
