import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Cep} from "../../model/cep";

/*
  Generated class for the CepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CepProvider {

    constructor(public http: HttpClient, public cep:Cep) {
        console.log('Hello CepProvider Provider');
    }

    private userUrl = 'http://viacep.com.br/ws/';

    public getCep(cep: Cep) {
        return this.http.get<any>(this.userUrl + "/"+ cep.cep + "/" + "json") ;
    }
}
