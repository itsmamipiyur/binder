import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthenticateProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthenticateProvider {
	url: string;
	user: any;

  constructor(public http: Http) {
    console.log('Hello AuthenticateProvider Provider');
    this.url = 'http://192.168.8.101/binder/authenticateUser';
  }

  checkAuth(username, password){
  	var arr = {'username': username,
  				'password': password};

  	var data = JSON.stringify(arr);

  	return this.http.post(this.url, data)
  		.map(res => res.json());
  }

  logout(){
    localStorage.setItem("auth", "false");
    localStorage.clear();
  }
}
