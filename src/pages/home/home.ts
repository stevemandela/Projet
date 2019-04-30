import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
import {ContactPage} from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string ='';

  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  showAlert(title:string , message: string) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
      alert.present();
 }

  login(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ContactPage , {
        username :this.username
      });
    }else{
      this.showAlert('Error', 'invalid Username');
    }
  }
  forgotPwd(){
    
  }

}
