import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { IACPrincipioMultiplicativoComand,
         IACPermutacaoSimplesComand,
         IACArranjosSimplesComand } from './analise-combinatoria.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoAnaliseCombinatoria {

  private data: Observable<RespostaJson>;
  private httpHeaders: HttpHeaders;
  private baseUrl: string;

  constructor(public _http: HttpClient) {
      this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      this.baseUrl = environment.url;

  }

  public postACPrincipioMultiplicativo(analiseCombinatoria: IACPrincipioMultiplicativoComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/analise_combinatoria/principio_multiplicativo';
    const body = JSON.stringify(analiseCombinatoria);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postACPermutacaoSimples(analiseCombinatoria: IACPermutacaoSimplesComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/analise_combinatoria/permutacao_simples';
    const body = JSON.stringify(analiseCombinatoria);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postACArranjoSimples(analiseCombinatoria: IACArranjosSimplesComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/analise_combinatoria/arranjos_simples';
    const body = JSON.stringify(analiseCombinatoria);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postACCombinacoesSimples(analiseCombinatoria: IACArranjosSimplesComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/analise_combinatoria/combinacoes_simples';
    const body = JSON.stringify(analiseCombinatoria);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }

   public postACBinomiosDeNewton(analiseCombinatoria: IACPermutacaoSimplesComand): Observable<RespostaJson> {
    const url =  this.baseUrl + 'api/analise_combinatoria/binomio_newton';
    const body = JSON.stringify(analiseCombinatoria);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
   }
}
