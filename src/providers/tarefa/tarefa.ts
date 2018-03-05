import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Tarefa} from "../../models/tarefa";

@Injectable()
export class TarefaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TarefaProvider Provider');
  }

  getAll():Array<Tarefa>{
    return new Array();
  }

}
