import { Component } from '@angular/core';

import { NavParams, NavController, ViewController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';
import { SearchUserPage } from '../search-user/search-user';
import { SellPage } from '../sell/sell';
import { FollowerPage } from '../follower/follower';
import { FollowingPage } from '../following/following';

import { AuthenticateProvider } from '../../providers/authenticate-provider';
import { UserProvider } from '../../providers/user-provider';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  activity: any;
  name: string;
  username: string;
  userId: string;
  image: string;
  followerCount: number;
  followingCount: number;
  currUser: string;

  showFollowButton: boolean;
  isFollowing: boolean;
  showNavTool: boolean;

  constructor(public navParams: NavParams, public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public viewCtrl: ViewController, private auth: AuthenticateProvider, private userProv: UserProvider) {
  	this.activity = 'post';

    this.showNavTool = (navParams.get('userId') == null) ? true : false;

    this.userId = (navParams.get('userId') != null) ? navParams.get('userId') : null;
    this.username = (navParams.get('userId') != null) ? null : localStorage.getItem('username');
    this.name = (navParams.get('userId') != null) ? null : localStorage.getItem("userFirst") + " " + localStorage.getItem("userLast");

    
    if(navParams.get('userId') != null){
      this.getUserInfo();
    }

    this.showFollowButton = (this.username == localStorage.getItem('username')) ? false : true;
  }

  ngOnInit(){
    this.currUser = localStorage.getItem('username');
    this.image = localStorage.getItem('image');
    this.getFollowCount();
  }

  getUserInfo()
  {
    var arr = {
      'userId': this.userId,
    };
    let userInfo: any;

    this.userProv.getUserInfo(arr).subscribe(res => {
      userInfo = res;
      this.username = userInfo.username;
      this.name = userInfo.firstName + ' ' + userInfo.lastName;
      this.image = userInfo.image;
      this.getFollowCount();
      this.checkFollowStatus();
    });
  }

  checkFollowStatus()
  {
    var arr = {
      "followerUsername": this.currUser,
      "followingUsername": this.username
    };
    
    let response: any;

    this.userProv.isFollowing(arr)
      .subscribe(res => {
        response = res;
        this.isFollowing = (response.result == '1') ? true : false;
      });
  }

  getFollowCount()
  {
    let followCount: any;
    var arr = {
        'username' : this.username,
      };
    this.userProv.getFollowCount(arr)
      .subscribe(res => {
        followCount = res;
        this.followerCount = followCount.followerCount;
        this.followingCount = followCount.followingCount;
      });
  }

  followUser()
  {
    var arr = {
      "followerUsername": this.currUser,
      "followingUsername": this.username
    };
    
    let response: any;

    this.userProv.followUser(arr)
      .subscribe(res => {
        response = res;
        this.isFollowing = (response.status == '1') ? true : false;
        this.getFollowCount();
      });
  }

  showSearch()
  {
  	this.navCtrl.push(SearchPage);
  }

  showMessagePage() {
  	this.navCtrl.push(MessagePage, {});
  }

  showSellPage(){
    this.navCtrl.push(SellPage);
  }

  openSettings(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Account Settings',
      buttons: [
        {
          text: 'Update Account',
          role: 'update',
          icon: 'options',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Logout',
          role: 'logout',
          icon: 'log-out',
          handler: () => {
            console.log('Logout clicked');
            this.logout();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  logout(){
    this.navCtrl.push(LoginPage).then(() => {
      this.auth.logout();
      this.navCtrl.remove(this.viewCtrl.index);
    });
  }

  openFollower()
  {
    this.navCtrl.push(FollowerPage, {
      username: this.username
    });
  }

  openFollowing()
  {
    this.navCtrl.push(FollowingPage, {
      username: this.username
    });
  }

  showSearchUser()
  {
    this.navCtrl.push(SearchUserPage); 
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    if(this.navParams.get('userId') != null){
      this.getUserInfo();
    }else{
      this.ngOnInit();
    }

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
