import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { TabsPage } from '../tabs/tabs';
import { ToastController} from 'ionic-angular';
import { AuthenticateProvider } from '../../providers/authenticate-provider';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string; 
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public viewCtrl: ViewController, private auth: AuthenticateProvider) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showSignUpPage(){
  	this.navCtrl.push(SignUpPage);
  }

  authenticate(){
    if (this.username == '' || this.username == null){
      this.presentToast('Username is required.', '0');     
    }else if (this.password == '' || this.password == null){
      this.presentToast('Password is required.', '0');
    }else{
      let response = this.auth.checkAuth(this.username, this.password).subscribe(res => {
        this.user = res
        console.log(this.user);
        if(this.user.isSuccess == '1'){
          localStorage.setItem('auth', this.user.isSuccess);
          localStorage.setItem('userFirst', this.user.userFirst);
          localStorage.setItem('userLast', this.user.userLast);
          localStorage.setItem('username', this.user.userName);
          localStorage.setItem('image', this.user.image);
        }

        this.presentToast(this.user.message, this.user.isSuccess);
      });
    }
  }

  presentToast(message, isSuccess) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present().then(() => {
      if(isSuccess == '1'){
        this.navCtrl.push(TabsPage).then(() => {
          const index = this.viewCtrl.index;
          this.navCtrl.remove(index);
        });
      }
    });
  }
}
