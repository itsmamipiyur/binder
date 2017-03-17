import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  auth: string;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    this.getAuth();

    //this.rootPage = LoginPage;
  }

  ngOnInit(){
    this.checkAuth();
  }

  checkAuth(){
    if(this.auth == "1"){
      this.rootPage = TabsPage;
    }else{
      this.rootPage = LoginPage;
    }
  }


  getAuth(){
    this.auth = localStorage.getItem("auth")
  }
}
