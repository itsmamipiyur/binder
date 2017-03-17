import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: Http) {
    console.log('Hello LocationProvider Provider');
  }

  getLocations(){
  	return this.http.get("http://192.168.8.101/binder/getLocations.php")
  		.map(res => res.json());
  }

}
