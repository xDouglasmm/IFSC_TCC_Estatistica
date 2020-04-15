import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { IFirstDegreeEquationCommand, IFirstDegreeEquationGeneralTermCommand } from './equacao-primeiro-grau.model';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ServicoEquacaoPrimeiroGrau {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    private baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }

    public postDynamicResolution(firstDegreeEquation: IFirstDegreeEquationCommand): Observable<RespostaJson> {
        const url =  this.baseUrl + '/api/first_degree_equations/dynamic_resolution';
        const body = JSON.stringify(firstDegreeEquation);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options);
    }

    public postGeneralTerm(firstDegreeEquation: IFirstDegreeEquationGeneralTermCommand): Observable<RespostaJson> {
        const url =  this.baseUrl + '/api/funcoes/funcao_primeiro_grau';
        const body = JSON.stringify(firstDegreeEquation);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options);
    }
}
