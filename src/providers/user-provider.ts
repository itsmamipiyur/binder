import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  url: string;

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
    this.url = "http://192.168.8.101/binder/insertUser.php";
  }

  insertUser(data: any){
    data = JSON.stringify(data);
    this.url = "http://192.168.8.101/binder/insertUser.php";

    return this.http.post(this.url, data)
      .map(res => res.json());
  }

  getFollowCount(data: any){
    data = JSON.stringify(data);
    this.url = "http://192.168.8.101/binder/getFollowCount.php";

    return this.http.post(this.url, data)
      .map(res => res.json());
  }

  getFollowers(data: any){
    data = JSON.stringify(data);
    this.url = "http://192.168.8.101/binder/getFollowers.php";

    return this.http.post(this.url, data)
      .map(res => res.json());
  }

  getFollowings(data: any){
    data = JSON.stringify(data);
    this.url = "http://192.168.8.101/binder/getFollowings.php";

    return this.http.post(this.url, data)
      .map(res => res.json());
  }

  getUserInfo(data: any){
    data = JSON.stringify(data);
    this.url = "http://192.168.8.101/binder/getUserInfo.php";

    return this.http.post(this.url, data)
      .map(res => res.json());
  }

  followUser(data: any){
    data = JSON.stringify(data);
    this.url = "http://192.168.8.101/binder/followUser.php";

    return this.http.post(this.url, data)
      .map(res => res.json());
  }

  isFollowing(data: any){
    data = JSON.stringify(data);
    this.url = "http://192.168.8.101/binder/isFollowing.php";

    return this.http.post(this.url, data)   
      .map(res => res.json());
  }

  searchUser(user){
    return this.http.get("http://192.168.8.101/binder/getUsers.php?val=" + user)
      .map(res => res.json());
  }
}
