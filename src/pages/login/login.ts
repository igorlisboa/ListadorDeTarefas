import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login/login";
import {Credencial} from "../../models/credencial";
import * as _ from "lodash";
import {TarefasListPage} from "../tarefas-list/tarefas-list";

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
      .subscribe(user => {
        this.navCtrl.setRoot(TarefasListPage);
      })
    this.loginProvider.loginFalhaEventEmiter
      .subscribe(error => console.log(error))
  }

  registrarSe(){
    this.navCtrl.push(RegistrarPage);
  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial)
      // .then(response =>{
      //   this.navCtrl.setRoot()
      // })
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }

  sair(){
    this.loginProvider.sair()
  }
}
