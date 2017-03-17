import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostProvider {

  constructor(public http: Http) {
    console.log('Hello PostProvider Provider');
  }

  getPosts(){
  	return this.http.get("http://192.168.8.101/binder/getPosts.php")
  		.map(res => res.json());
  }

  searchPost(post){
  	return this.http.get("http://192.168.8.101/binder/getPosts.php?val=" + post)
  		.map(res => res.json());
  }

  getFollowerPost(username: string){
    return this.http.get("http://192.168.8.101/binder/getPosts.php?username=" + username)
      .map(res => res.json());
  }

  postItem(data: any){
    data = JSON.stringify(data);
    let url = "http://192.168.8.101/binder/postItem.php";

    return this.http.post(url, data)
      .map(res => res.json());
  }

}
