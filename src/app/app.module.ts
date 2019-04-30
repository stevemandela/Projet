import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { DemoPage } from '../pages/demo/demo';
import { EmployeeListPage } from '../pages/employee-list/employee-list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MeteoProvider } from '../providers/meteo/meteo';
import { EmployeesProvider } from '../providers/employees/employees';

var config = {
  apiKey: "AIzaSyBAPu_B14MAbo6DW-qQRvcGdRmDLh97RHU",
  authDomain: "ionic-chat-66ad9.firebaseapp.com",
  databaseURL: "https://ionic-chat-66ad9.firebaseio.com",
  projectId: "ionic-chat-66ad9",
  storageBucket: "ionic-chat-66ad9.appspot.com",
  messagingSenderId: "345133480156"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    DemoPage,
    EmployeeListPage
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    DemoPage,
    EmployeeListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeteoProvider,
    EmployeesProvider
  ]
})
export class AppModule {}
