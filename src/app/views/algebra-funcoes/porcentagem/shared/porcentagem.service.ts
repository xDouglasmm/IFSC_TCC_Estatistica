import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { IPorCalculoPercentualComand,
         IPorCalculoPorcentagemComand } from './porcentagem.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoPorcentagem {

  private data: Observable<RespostaJson>;
  private httpHeaders: HttpHeaders;
  private baseUrl: string;

  constructor(public _http: HttpClient) {
      this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      this.baseUrl = environment.url;

  }

  public postPorCalculoPercentual(porcentagem: IPorCalculoPercentualComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/porcentagem/calculo_percentual';
    const body = JSON.stringify(porcentagem);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postPorCalculoPorcentagem(porcentagem: IPorCalculoPorcentagemComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/porcentagem/calculo_da_porcentagem';
    const body = JSON.stringify(porcentagem);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postPorAcrescimo(porcentagem: IPorCalculoPercentualComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/porcentagem/acrescimo';
    const body = JSON.stringify(porcentagem);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postPorDesconto(porcentagem: IPorCalculoPercentualComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/porcentagem/desconto';
    const body = JSON.stringify(porcentagem);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }
}
