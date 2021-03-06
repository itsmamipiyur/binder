import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	items: any;
  result: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postProv: PostProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  initializeItems(){
    this.items = null;
    this.result = null;
  }

  searchPost(val){
  	this.postProv.searchPost(val).subscribe(res => {
  		this.items = res
      this.result = Object.keys(this.items).length;
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

}
