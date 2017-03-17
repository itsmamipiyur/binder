import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FormDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FormDataProvider {

  constructor(public http: Http) {
    console.log('Hello FormDataProvider Provider');
  }

  getLocations(){
  	return this.http.get("http://192.168.8.101/binder/getLocations.php")
  		.map(res => res.json());
  }

  getConditions(){
  	return this.http.get("http://192.168.8.101/binder/getConditions.php")
  		.map(res => res.json());
  } 

  getBookTypes(){
  	return this.http.get("http://192.168.8.101/binder/getBookTypes.php")
  		.map(res => res.json());
  }

  getCategories(){
  	return this.http.get("http://192.168.8.101/binder/getCategories.php")
  		.map(res => res.json());
  }  

}
