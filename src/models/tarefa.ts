import {EstadoTarefa} from "./estado-tarefa"
export class Tarefa{
	keyReference: string;
	titulo : string;
	descricao : string;
	estado : EstadoTarefa;

	constructor(titulo?:string,descricao?:string){
	  this.titulo = titulo;
	  this.descricao = descricao;
	  this.estado = EstadoTarefa.NOVA;
  }
}
