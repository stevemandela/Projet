import { Component, state } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeteoProvider } from '../../providers/meteo/meteo';
import {Storage} from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  meteo:any;
  location:{
    city:string;
    state:string;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private MeteoProvider:MeteoProvider, 
    private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
 ionViewWillEnter(){
  this.storage.get('location').then((val) => {
    if (val != null){
      this.location = JSON.parse(val);
    }else{
      this.location ={
        city:'Miami',
        state: 'FL'
      }
    }
    this.MeteoProvider.getmeteo(this.location.city, this.location.state).subscribe(meteo => {
      this.meteo = meteo.current_observation;
    });
  });

   
  
 }
}
