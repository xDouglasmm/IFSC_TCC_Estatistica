import { environment } from '../../../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import {
    ICompostoCapitalComand,
    ICompostoMontanteComand,
    ICompostoTaxaComand,
    ICompostoTempoComand,
    ISimplesCapitalComand,
    ISimplesMontanteComand,
    ISimplesTaxaComand,
    ISimplesTempoComand} from './juros-simples-e-compostos.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ServicoJurosSimplesComposto {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    private baseUrl: string;

  constructor(public _http: HttpClient) {
      this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      this.baseUrl = environment.url;
  }

  public postCompostoCapital (jurosSimpleCompost: ICompostoCapitalComand): Observable<RespostaJson> {
      const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_compostos_capital';
      const body = JSON.stringify(jurosSimpleCompost);

      const options = {
          headers: this.httpHeaders
      };

      return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postCompostoMontante (jurosSimpleCompost: ICompostoMontanteComand): Observable<RespostaJson> {
      const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_compostos_montante';
      const body = JSON.stringify(jurosSimpleCompost);

      const options = {
          headers: this.httpHeaders
      };

      return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
  }

  public postCompostoTaxa (jurosSimpleCompost: ICompostoTaxaComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_compostos_taxa';
    const body = JSON.stringify(jurosSimpleCompost);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
}

public postCompostoTempo (jurosSimpleCompost: ICompostoTempoComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_compostos_tempo';
    const body = JSON.stringify(jurosSimpleCompost);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
}

public postSimplesCapital (jurosSimpleCompost: ISimplesCapitalComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_simples_capital';
    const body = JSON.stringify(jurosSimpleCompost);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
}

public postSimplesMontante (jurosSimpleCompost: ISimplesMontanteComand): Observable<RespostaJson> {
    const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_simples_montante';
    const body = JSON.stringify(jurosSimpleCompost);

    const options = {
        headers: this.httpHeaders
    };

    return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
}

public postSimplesTaxa (jurosSimpleCompost: ISimplesTaxaComand): Observable<RespostaJson> {
  const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_simples_taxa';
  const body = JSON.stringify(jurosSimpleCompost);

  const options = {
      headers: this.httpHeaders
  };

  return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
}

public postSimplesTempo (jurosSimpleCompost: ISimplesTempoComand): Observable<RespostaJson> {
  const url = this.baseUrl + 'api/juros_simples_e_compostos/juros_simples_tempo';
  const body = JSON.stringify(jurosSimpleCompost);

  const options = {
      headers: this.httpHeaders
  };

  return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
}

}
