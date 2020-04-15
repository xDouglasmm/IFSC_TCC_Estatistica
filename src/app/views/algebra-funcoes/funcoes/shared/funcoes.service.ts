import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { IFUNSegundoGrauComand,
         IFUNValorNumericoComand,
         IFUNEncontrarFuncaoComand
} from './funcoes.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoFuncoes {

  private data: Observable<RespostaJson>;
  private httpHeaders: HttpHeaders;
  private baseUrl: string;

  constructor(public _http: HttpClient) {
      this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      this.baseUrl = environment.url;

  }

  public postFUNEncontrarValor(funcoes: IFUNValorNumericoComand): Observable<RespostaJson> {
    const url =  this.baseUrl + '/api/funcoes/funcao_primeiro_grau';
    const body = JSON.stringify(funcoes);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postFUNEncontrarFuncao(funcoes: IFUNEncontrarFuncaoComand): Observable<RespostaJson> {
    const url = this.baseUrl + '/api/funcoes/funcao_primeiro_grau_descobrir_funcao';
    const body = JSON.stringify(funcoes);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

  public postFUNSegundoGrau(funcoes: IFUNSegundoGrauComand): Observable<RespostaJson> {
      const url = this.baseUrl + '/api/funcoes/funcao_segundo_grau';
      const body = JSON.stringify(funcoes);

      const options = {
          headers: this.httpHeaders
      };

      return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

}
