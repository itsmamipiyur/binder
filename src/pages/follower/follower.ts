import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { MePage } from '../me/me';

/*
  Generated class for the Follower page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-follower',
  templateUrl: 'follower.html'
})
export class FollowerPage {

	followers: any;
	username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProv: UserProvider) {
  	this.username = navParams.get('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowerPage');
  }

  ngOnInit()
  {
  	//this.username = localStorage.getItem('username');
  	this.getFollowers();
  }

  getFollowers()
  {
  	var arr = {
        'username' : this.username,
      };

    console.log(JSON.stringify(arr));
    this.userProv.getFollowers(arr)
      .subscribe(res => {
        this.followers = res
      });
  }

  showUser(userId)
  {
  	console.log(userId);
  	this.navCtrl.push(MePage, {
  		userId: userId,
  	});


  }

}
