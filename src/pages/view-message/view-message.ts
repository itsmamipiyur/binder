import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { App, ViewController } from 'ionic-angular';

/*
  Generated class for the ViewMessage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-message',
  templateUrl: 'view-message.html'
})
export class ViewMessagePage {
  name: string;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
  	this.name = this.navParams.get('name');
    this.title = this.navParams.get('title');
    console.log(this.name + ' ' + this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMessagePage');
  }

  /*ionViewWillLeave(){
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().setRoot(MessagePage);
  }*/
}
