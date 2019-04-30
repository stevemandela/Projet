import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  username: string='';
  message: string='';
  s;
  messages: object[] = [];
 

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.username = this.navParams.get('username');
     this.s = this.db.list('/chat').valueChanges().subscribe(data => {
       data.map(elem =>{
        this.messages = data;
       })
      
      })
  }

  sendMessager(){
    this.db.list('/chat').push({
      username : this.username,
      message: this.message
    }).then(() => {

    })
    this.message = '';
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DemoPage');
  }
}
