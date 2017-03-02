import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  activity: any;

  constructor(public navCtrl: NavController) {
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

}
