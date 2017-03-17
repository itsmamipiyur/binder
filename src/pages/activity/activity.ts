import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { SearchPage } from '../search/search';
import { SellPage } from '../sell/sell';
import { SearchUserPage } from '../search-user/search-user';

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

  showSellPage(){
    this.navCtrl.push(SellPage);
  }

  showSearchUser()
  {
    this.navCtrl.push(SearchUserPage); 
  }
}
