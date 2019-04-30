import { Component, state } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {SettingsPage} from '../settings/settings';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  city:string;
  state:string;

  constructor(public navCtrl: NavController, private storage:Storage) {
    this.storage.get('location').then((val) => {
      if (val != null){
        let location = JSON.parse(val);
        this.city= location.city;
        this.state= location.state;
      }else{
          this.city='Miami',
          this.state= 'FL'
      
      }
  });

}
saveForm(){
  let location = {
    city: this.city,
    state: this.state
  }
  this.storage.set('location', JSON.stringify(location));
  this.navCtrl.push(SettingsPage);
}

}
