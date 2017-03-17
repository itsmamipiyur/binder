import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewMessagePage } from '../view-message/view-message';

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  like: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.like = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  viewMessage(name: string, title: string) {
  	this.navCtrl.push(ViewMessagePage, { name: name, title: title });
  }

  likePost() {
    if(this.like){
      this.like = false;
    }else{
      this.like = true;
    }
  }
}