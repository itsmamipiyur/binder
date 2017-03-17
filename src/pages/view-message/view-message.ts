import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  img: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
  	this.name = this.navParams.get('name');
    this.title = this.navParams.get('title');
    this.img = this.navParams.get('img');
    console.log(this.name + ' ' + this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMessagePage');
  }

  /*ionViewDidLeave(){
    this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }*/
}
