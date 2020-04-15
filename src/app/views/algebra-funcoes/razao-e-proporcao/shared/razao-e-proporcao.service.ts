import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
    IRazaoComand,
    IRazaoInversaComand,
    IRazaoEquivalenteComand,
    ITermoDesconhecidoComand,
    IVerificaProporcaoComand
} from './razao-e-proporcao.model';

import 'rxjs/add/operator/map';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoRazaoProporcao {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    private baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }

    public postRazao(razaoProporcao: IRazaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/razao_e_proporcao/razao';
        const body = JSON.stringify(razaoProporcao);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postRazaoInversa(razaoProporcao: IRazaoInversaComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/razao_e_proporcao/razao_inversa';
        const body = JSON.stringify(razaoProporcao);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postRazaoEquivalente(razaoProporcao: IRazaoEquivalenteComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/razao_e_proporcao/razao_equivalente';
        const body = JSON.stringify(razaoProporcao);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postTermoDesconhecido(razaoProporcao: ITermoDesconhecidoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/razao_e_proporcao/proporcao_termo_desconhecido';
        const body = JSON.stringify(razaoProporcao);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postVerificaProporcao(razaoProporcao: IVerificaProporcaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/razao_e_proporcao/proporcao';
        const body = JSON.stringify(razaoProporcao);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

}