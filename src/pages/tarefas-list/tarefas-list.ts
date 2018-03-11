import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {TarefasAddPage} from "../tarefas-add/tarefas-add";


@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  public tarefasList : Array<Tarefa>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tarefaProvider:TarefaProvider,
              private ngZone: NgZone,
              public toast :ToastController) {
  }

 ionViewDidLoad(){
    this.tarefaProvider.referencia.on('child_removed', snapshot =>{
      let tarefaRemovida = snapshot.val();
      this.toast.create({
        message : 'Tarefa '+tarefaRemovida.titulo+ 'removida com sucesso!',
        duration : 3000
      }).present();
    });
    this.tarefaProvider.referencia.on('value', (snapshot) =>{
      this.ngZone.run(() =>{
        let innerArray = new Array();
        snapshot.forEach(elemento =>{
          let elemTemp = elemento.val();
          innerArray.push(elemTemp);
        })
        this.tarefasList = innerArray;
      })
    })
 }

 atualizaTarefa(tarefa:Tarefa){
   this.navCtrl.push(TarefasAddPage,{'tarefa' : tarefa});
 }

  adicionarTarefa(){
   this.navCtrl.push(TarefasAddPage, {'tarefa' : undefined});
  }

  deletar(tarefa:Tarefa){
    this.tarefaProvider.delete(tarefa)
      .then(success => console.log('tarefasList deletada'))
      .catch(error => console.log('Não foi possivel deletar'));
  }

}
