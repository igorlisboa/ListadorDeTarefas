import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {TranslateService} from "ng2-translate";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translateService: TranslateService) {
    platform.ready().then(() => {
      translateService.setDefaultLang('pt-br');
      translateService.use('pt-br');
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
