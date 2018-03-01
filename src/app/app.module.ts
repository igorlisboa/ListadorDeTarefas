import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import {RegistrarPage} from "../pages/registrar/registrar";

const FirebaseConfig = {
  apiKey: "AIzaSyCtH2NDegOKKnbu7P5F_E2fBm0oK9pdffM",
  authDomain: "listadordetarefas-a7095.firebaseapp.com",
  databaseURL: "https://listadordetarefas-a7095.firebaseio.com",
  projectId: "listadordetarefas-a7095",
  storageBucket: "listadordetarefas-a7095.appspot.com",
  messagingSenderId: "973001995830"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(FirebaseConfig);
  }
}
