import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { MePage } from '../me/me';

/*
  Generated class for the Following page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-following',
  templateUrl: 'following.html'
})
export class FollowingPage {
	followings: any;
	username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProv: UserProvider) {
  	this.username = navParams.get('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowingPage');
  }

  ngOnInit()
  {
  	//this.username = localStorage.getItem('username');
  	this.getFollowings();
  }

  getFollowings()
  {
  	var arr = {
        'username' : this.username,
      };

    console.log(JSON.stringify(arr));
    this.userProv.getFollowings(arr)
      .subscribe(res => {
        this.followings = res
        console.log(this.followings);
      });
  }

  showUser(userId)
  {
  	this.navCtrl.push(MePage, {
  		userId: userId,
  	});
  }

}
