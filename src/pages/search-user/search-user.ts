import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { MePage } from '../me/me';

/*
  Generated class for the SeachUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html'
})
export class SearchUserPage {

  users: any;
  result: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProv: UserProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeachUserPage');
  }

  initializeItems(){
    this.users = null;
    this.result = null;
  }

  searchPost(val){
  	this.userProv.searchUser(val).subscribe(res => {
  	  this.users = res
      this.result = Object.keys(this.users).length;
  	});
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.searchPost(val);
    }
  }

  showUser(userId)
  {
    console.log(userId);
    this.navCtrl.push(MePage, {
      userId: userId,
    });
  }

}
