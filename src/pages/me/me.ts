import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { SearchPage } from '../search/search';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  activity: any;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
  	this.activity = 'post';
  }

  showSearch()
  {
  	this.navCtrl.push(SearchPage);
  }

  showMessagePage() {
  	console.log('clicked');
  	this.navCtrl.push(MessagePage, {});
  }

  openSettings(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Account Settings',
      buttons: [
        {
          text: 'Update Account',
          role: 'update',
          icon: 'options',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Logout',
          role: 'logout',
          icon: 'log-out',
          handler: () => {
            console.log('Logout clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
