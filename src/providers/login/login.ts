import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable, NgZone} from '@angular/core';
import {Credencial} from "../../models/credencial";
import * as firebase from 'firebase';

@Injectable()
export class LoginProvider {

  currentUser:any;
  autenticado:boolean;
  loginSucessoEventEmiter: EventEmitter<any>;
  loginFalhaEventEmiter: EventEmitter<any>;
  logoutEventEmiter: EventEmitter<any>;

  constructor(public http: HttpClient,
              public ngZone: NgZone) {
    this.loginFalhaEventEmiter = new EventEmitter();
    this.loginSucessoEventEmiter = new EventEmitter();
    this.logoutEventEmiter = new EventEmitter();

    firebase.auth().onAuthStateChanged( user =>{
      this.callbackStageChange(user);
    });

  }

  private callbackStageChange(usuario){
    this.ngZone.run(()=>{
      if(usuario == null){
        this.currentUser = null;
        this.autenticado = false;
      }else{
        this.currentUser = usuario;
        this.autenticado = true;
      }
    })
  }

  private callbackSucessoLogin(response){
    this.loginSucessoEventEmiter.emit(response.user);
  }

  private callbackFalhaLogin(error){
    this.loginFalhaEventEmiter.emit(
      {
        code : error.code,
        message: error.message,
        email: error.email,
        credencial : error.credencial
      });
  }

  loginComCredencial(credencial:Credencial){
    firebase.auth().signInWithEmailAndPassword(credencial.email,credencial.senha)
      .then(response => this.callbackSucessoLogin(response))
      .catch(error => this.callbackFalhaLogin(error));
  }

  loginComFacebook(){
    let provider =  new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(provider)
      .then(response => this.callbackSucessoLogin(response))
      .catch(error => this.callbackFalhaLogin(error));
  }

  loginComGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(response => this.callbackSucessoLogin(response))
      .catch(error => this.callbackFalhaLogin(error));
  }

  sair(){
    firebase.auth().signOut()
      .then(()=> this.logoutEventEmiter.emit(true))
      .catch(error => this.callbackFalhaLogin(error))
  }

  registrarUsuario(credencial:Credencial){
    firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      });
  }
}
