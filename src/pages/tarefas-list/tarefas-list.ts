import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";


@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  public taferas : Array<Tarefa>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tarefaProvider:TarefaProvider) {
  }

 ionViewDidLoad(){
    this.taferas = this.tarefaProvider.getAll();
 }



}
