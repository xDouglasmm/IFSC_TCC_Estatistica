import { environment } from '../../../../../environments/environment';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import {
    ITermoGeralComand,
    ISomaComand,
    IPrimeiroElementoComand,
    IFormulaComand,
    IPosicaoComand,
    IRazao2TermosComand,
    IVerificarElementoComand,
    ICriarSequenciaComand
} from './progressao-aritmetica.model';

@Injectable()
export class ServicoProgressaoAritmetica {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    private baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }
    public postTermoGeral(progressaoAritmetica: ITermoGeralComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/termo_geral';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postSoma(progressaoAritmetica: ISomaComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/soma';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postPrimeroElemento(progressaoAritmetica: IPrimeiroElementoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/primero_elemento';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postFormula(progressaoAritmetica: IFormulaComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/razao';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postPosicao(progressaoAritmetica: IPosicaoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/posicao';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postRazao2Termos(progressaoAritmetica: IRazao2TermosComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/razao_dois_elementos';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postVerificarElemento(progressaoAritmetica: IVerificarElementoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/verifica_elemento';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }


    public postCriarSequencia(progressaoAritmetica: ICriarSequenciaComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/progressao_aritmetica/criar_sequencia';
        const body = JSON.stringify(progressaoAritmetica);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

}
