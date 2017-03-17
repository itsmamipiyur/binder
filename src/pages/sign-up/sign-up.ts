import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { LocationProvider } from '../../providers/location-provider';
import { Camera } from 'ionic-native';

/*
  Generated class for the SignUp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

	firstName: string;
	lastName: string;
	locationId: string;
	username: string; 
	password: string;
  response: any;
  locations: any;
  public base64Image: string;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public userProv: UserProvider, public locationProv: LocationProvider, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locationProv.getLocations()
      .subscribe(res => {
        this.locations = res
      });
  }

  validate(){
    if(this.firstName == '' || this.firstName == null){
      this.presentToast('First Name is required.', '0');
    }else if (this.lastName == '' || this.lastName == null){
      this.presentToast('Last Name is required.', '0');     
    }else if (this.locationId == '' || this.locationId == null){
      this.presentToast('Location is required.', '0');     
    }else if (this.username == '' || this.username == null){
      this.presentToast('Username is required.', '0');     
    }else if (this.username.length < 5){
      this.presentToast('Username must be longer than 5 characters.', '0');     
    }else if (this.password == '' || this.password == null){
      this.presentToast('Password is required.', '0');     
    }else if (this.password.length < 5){
      this.presentToast('Password must be longer than 5 characters.', '0');     
    }else if (this.base64Image == null || this.base64Image == ''){
      this.presentToast('Image is required.', '0');
    }else{
      var arr = {
        'image' : this.base64Image,
        'firstName' : this.firstName,
        'lastName' : this.lastName,
        'locationId' : this.locationId,
        'username' : this.username,
        'password' : this.password
      };
      console.log(JSON.stringify(arr));

       this.userProv.insertUser(arr).subscribe(res => {
          this.response = res;
          this.presentToast(this.response.message, this.response.isSuccess);
        });
    }

    /*var arr = {
      'userFirst' : this.firstName,
      'userLast' : this.lastName,
      'userBirth' : this.birthday,
      'userName' : this.username,
      'userPass' : this.password
    };

    this.userProv.insertUser(arr);
    //console.log(JSON.stringify(arr));*/
  }

  presentToast(message, isSuccess) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present().then(() => {
      if(isSuccess == '1'){
        this.navCtrl.pop();
      }
    });
  }

  choosePhoto(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Photo',
      buttons: [
        {
          text: 'Take Photo',
          icon: 'aperture',
          handler: () => {
            console.log('Take Photo');
            this.takePhoto();
          }
        },{
          text: 'from Gallery',
          icon: 'folder',
          handler: () => {
            console.log('from Gallery');
            this.fromGallery();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  takePhoto(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 300,
        targetHeight: 200,
        quality: 100,
        encodingType: Camera.EncodingType.JPEG
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

 fromGallery(){
   Camera.getPicture({
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL,
     quality: 100
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

}