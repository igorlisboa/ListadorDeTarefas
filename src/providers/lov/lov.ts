import {Injectable} from '@angular/core';
import {EstadoTarefa} from "../../models/estado-tarefa";

@Injectable()
export class LovProvider {

  constructor() {
  }

  getTarefaState():Array<EstadoTarefa>{
    return [EstadoTarefa.NOVA,EstadoTarefa.EXECUTANDO,EstadoTarefa.FINALIZADA];
  }

}
