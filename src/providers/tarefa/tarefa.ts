import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Tarefa} from "../../models/tarefa";
import firebase from 'firebase';
import {LoginProvider} from "../login/login";
import {isUndefined} from "ionic-angular/util/util";

@Injectable()
export class TarefaProvider {

  public referencia;

  constructor(public http: HttpClient,
              private loginProvider : LoginProvider) {
    this.initialize();
  }

  private initialize() {
    this.referencia = firebase.database().ref(this.loginProvider.currentUser.uid+'/tarefas/');
  }

  public save(tarefa : Tarefa){
    alert("dentro do save");
    if(isUndefined(tarefa.keyReference)){
      tarefa.keyReference = this.referencia.push().key;
    }
    this.referencia.child(tarefa.keyReference).update(tarefa);
  }

  public delete(tarefa : Tarefa):any{
    this.referencia.child(tarefa.keyReference).remove();
  }
}
