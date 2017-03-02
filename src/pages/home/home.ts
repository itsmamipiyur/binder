import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  showMessagePage() {
  	console.log('clicked');
  	this.navCtrl.push(MessagePage, {});
  }
}
