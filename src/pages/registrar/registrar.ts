import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Credencial} from "../../models/credencial";
import {LoginProvider} from "../../providers/login/login";

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  credencial : Credencial;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loginProvider: LoginProvider) {
    this.credencial = new Credencial();
  }

  registrar(){
    this.loginProvider.registrarUsuario(this.credencial);
  }

}
