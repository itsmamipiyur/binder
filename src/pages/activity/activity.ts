import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {

  constructor(public navCtrl: NavController) {

  }

  clickItem(item: string) {
  	console.log('item: ' + item);
  }

  showMessagePage() {
  	console.log('clicked');
  	this.navCtrl.push(MessagePage, {});
  }

  showSearch()
  {
    this.navCtrl.push(SearchPage);
  }

}
