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
import { TarefaProvider } from '../providers/tarefa/tarefa';
import {TarefaListItemComponent} from "../components/tarefa-list-item/tarefa-list-item";
import {TarefasAddPage} from "../pages/tarefas-add/tarefas-add";
import {TarefasListPage} from "../pages/tarefas-list/tarefas-list";
import { LovProvider } from '../providers/lov/lov';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from "ng2-translate";
import {Http} from "@angular/http";

const FirebaseConfig = {
  apiKey: "AIzaSyCtH2NDegOKKnbu7P5F_E2fBm0oK9pdffM",
  authDomain: "listadordetarefas-a7095.firebaseapp.com",
  databaseURL: "https://listadordetarefas-a7095.firebaseio.com",
  projectId: "listadordetarefas-a7095",
  storageBucket: "listadordetarefas-a7095.appspot.com",
  messagingSenderId: "973001995830"
};

export function createTranslateLoader(http:Http){
  return new TranslateStaticLoader(http, '../assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TarefaListItemComponent,
    TarefasAddPage,
    TarefasListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFActory : (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TarefaListItemComponent,
    TarefasAddPage,
    TarefasListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    TarefaProvider,
    LovProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(FirebaseConfig);
  }
}
