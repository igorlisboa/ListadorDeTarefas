import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login/login";
import {Credencial} from "../../models/credencial";
import * as _ from "lodash";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credencial : Credencial = _.defaults();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loginProvider : LoginProvider) {
  }

  ionViewDidLoad() {
    this.loginProvider.loginSucessoEventEmiter
      .subscribe(user => console.log(user))
    this.loginProvider.loginFalhaEventEmiter
      .subscribe(error => console.log(error))
  }

  registrarSe(){
    this.navCtrl.push(RegistrarPage);
  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial)
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  sair(){
    this.loginProvider.sair()
  }
}
