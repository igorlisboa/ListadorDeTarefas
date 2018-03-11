import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {LovProvider} from "../../providers/lov/lov";
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {isUndefined} from "ionic-angular/util/util";

/**
 * Generated class for the TarefasAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAddPage {

  tarefa: Tarefa = new Tarefa;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewController: ViewController,
              private tarefasProvider : TarefaProvider,
              public lovProvider:LovProvider) {}

  ionViewDidLoad() {
    this.tarefa = this.navParams.get('tarefa');
    if(isUndefined(this.tarefa)){
      this.tarefa = new Tarefa;
    }
  }

  public salvarTarefa(){
    this.tarefasProvider.save(this.tarefa);
    this.viewController.dismiss();
  }

}
