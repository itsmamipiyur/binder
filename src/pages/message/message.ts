import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewMessagePage } from '../view-message/view-message';

/*
  Generated class for the Message page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  viewMessage(name: string, title: string, img: string) {
  	this.navCtrl.push(ViewMessagePage, { name: name, title: title, img: img });
  }

}
