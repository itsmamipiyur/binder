import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { FormDataProvider } from '../../providers/form-data-provider';
import { PostProvider } from '../../providers/post-provider';
import {Camera} from 'ionic-native';
import { HomePage } from '../home/home';

/*
  Generated class for the Sell page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html'
})
export class SellPage {
  itemName: string;
  conditionId: string;
  bookTypeId: string;
  categoryId: string;
  userId: string;
  locationId: string;
  price: any;
  description: string;

	categories: any;
	bookTypes: any;
	conditions: any;
	locations: any;
  public base64Image: string;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private formDataProv: FormDataProvider, private postProv: PostProvider, public actionSheetCtrl: ActionSheetController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }

  ngOnInit()
  {
  	this.getCategories();
  	this.getConditions();
  	this.getBookTypes();
  	this.getLocations();
  }

  getLocations() {
    this.formDataProv.getLocations()
      .subscribe(res => {
        this.locations = res
      });
  }

  getBookTypes() {
    this.formDataProv.getBookTypes()
      .subscribe(res => {
        this.bookTypes = res
      });
  }

  getConditions() {
    this.formDataProv.getConditions()
      .subscribe(res => {
        this.conditions = res
      });
  }

  getCategories() {
    this.formDataProv.getCategories()
      .subscribe(res => {
        this.categories = res
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
        quality: 100
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

  validate(){
    if(this.itemName == '' || this.itemName == null){
      this.presentToast('Item Name is required.', '0');
    }else if (this.conditionId == '' || this.conditionId == null){
      this.presentToast('Select a condition.', '0');     
    }else if (this.bookTypeId == '' || this.bookTypeId == null){
      this.presentToast('Select a Book Type.', '0');     
    }else if (this.categoryId == '' || this.categoryId == null){
      this.presentToast('Select a category.', '0');     
    }else if (this.locationId == '' || this.locationId == null){
      this.presentToast('Select a location.', '0');     
    }else if (this.base64Image == null || this.base64Image == ''){
      this.presentToast('Image is required.', '0');
    }else if (this.price == null || this.price == ''){
      this.presentToast('Image is required.', '0');
    }else{
      var arr = {
        'image' : this.base64Image,
        'itemName' : this.itemName,
        'conditionId' : this.conditionId,
        'bookTypeId' : this.bookTypeId,
        'categoryId' : this.categoryId,
        'locationId' : this.locationId,
        'userId' : localStorage.getItem('username'),
        'description' : (this.description == null || this.description == '') ? null : this.description,
        'price' : this.price
      };

      let response: any;
       this.postProv.postItem(arr).subscribe(res => {
          response = res;
          this.presentToast(response.message, response.isSuccess);
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
        this.navCtrl.pop();
      }
    });
  }

}
