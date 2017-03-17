import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { SearchPage } from '../search/search';
import { SearchUserPage } from '../search-user/search-user';
import { SellPage } from '../sell/sell';

import { PostProvider } from '../../providers/post-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
  result: number;

  constructor(public navCtrl: NavController, private postProv: PostProvider) {

  }

  ngOnInit(){
    this.result = null;
    this.getPosts();
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

  getPosts(){
    this.postProv.getFollowerPost(localStorage.getItem('username')).subscribe(res => {
      this.posts = res
      this.result = Object.keys(this.posts).length;
    });
  }

  showSearchUser()
  {
    this.navCtrl.push(SearchUserPage); 
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.getPosts();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
