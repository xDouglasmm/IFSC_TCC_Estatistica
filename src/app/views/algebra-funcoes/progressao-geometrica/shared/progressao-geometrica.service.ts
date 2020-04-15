import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IPGTermoGeralComand,
         IPGRazao2TermosComand,
         IPGPrimeiroElementoComand,
         IPGPrimeiroTermoSomaComand,
         IPGSomaElementosInfinitaComand,
         IPGVerificarElementoComand} from './progressao-geometrica.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoProgressaoGeometrica {

  private data: Observable<RespostaJson>;
  private httpHeaders: HttpHeaders;
  private baseUrl: string;

  constructor(public _http: HttpClient) {
      this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      this.baseUrl = environment.url;
  }

  public postTermoGeral(progressaoGeometrica: IPGTermoGeralComand): Observable<RespostaJson> {
      const url = this.baseUrl + 'api/progressao_geometrica/formula_termo_geral';
      const body = JSON.stringify(progressaoGeometrica);

      const options = {
          headers: this.httpHeaders
      };

      return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postFormula(progressaoGeometrica: IPGTermoGeralComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/razao_formula';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postRazao2Termos(progressaoGeometrica: IPGRazao2TermosComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/razao_dois_elementos';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postPrimeiroElemento(progressaoGeometrica: IPGPrimeiroElementoComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/primeiro_elemento';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postPosicao(progressaoGeometrica: IPGTermoGeralComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/posicao';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postPrimeroTermoSoma(progressaoGeometrica: IPGPrimeiroTermoSomaComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/primeiro_termo_soma';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postSomaElementosFinita(progressaoGeometrica: IPGPrimeiroTermoSomaComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/soma_infinita';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postSomaElementosInfinita(progressaoGeometrica: IPGSomaElementosInfinitaComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/soma_infinita';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postVerificarElemento(progressaoGeometrica: IPGVerificarElementoComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/verifica_elemento';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postCriarSequencia(progressaoGeometrica: IPGTermoGeralComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/progressao_geometrica/criar_sequencia';
    const body = JSON.stringify(progressaoGeometrica);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
}
}
