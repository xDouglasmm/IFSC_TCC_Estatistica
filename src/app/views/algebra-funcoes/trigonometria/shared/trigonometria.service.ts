import { environment } from '../../../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespostaJson } from '../../../../core/modelos/resposta-json';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {
    ISenoComand,
    IRazaoTrigonometricaComand,
    IMedidaAnguloInscritoComand,
    IMedidaAnguloCentralComand,
    IMediaUsandoRadianosComand,
    IMediaUsandoGrausComand,
    IFuncoesTrigonometricasComand,
    ICossenoComand,
    IAnguloPonteirosComand,
    IAnguloExcentricoInternoComand,
    IAnguloExcentricoExternoComand,
    ITangenteComand
} from './trigonometria.model';

@Injectable()
export class ServicoTrigonometria {

    private data: Observable<RespostaJson>;
    private httpHeaders: HttpHeaders;
    private baseUrl: string;

    constructor(public _http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.baseUrl = environment.url;
    }

    public postAnguloExcentricoExterno(trigonometria: IAnguloExcentricoExternoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/medida_angulo_excentrico_externo';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postAnguloExcentricoInterno(trigonometria: IAnguloExcentricoInternoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/medida_angulo_excentrico_interno';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postAnguloPonteiros(trigonometria: IAnguloPonteirosComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/angulo_ponteiros';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postCosseno(trigonometria: ICossenoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/cosseno';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postFuncoesTrigonometricas(trigonometria: IFuncoesTrigonometricasComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/funcoes_trigonometricas';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postMediaUsandoGraus(trigonometria: IMediaUsandoGrausComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/medida_arcos_grau';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postMediaUsandoRadianos(trigonometria: IMediaUsandoRadianosComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/medida_arcos_radiano';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postMedidaAnguloCentral(trigonometria: IMedidaAnguloCentralComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/medida_angulo_central';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postMedidaAnguloInscrito(trigonometria: IMedidaAnguloInscritoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/medida_angulo_inscrito';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postRazaoTrigonometrica(trigonometria: IRazaoTrigonometricaComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/razoes_trigonometricas';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postSeno(trigonometria: ISenoComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/seno';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }

    public postTangente(trigonometria: ITangenteComand): Observable<RespostaJson> {
        const url = this.baseUrl + 'api/trigonometria/tangente';
        const body = JSON.stringify(trigonometria);

        const options = {
            headers: this.httpHeaders
        };

        return this._http.post<RespostaJson>(url, body, options).map((response: RespostaJson) => response);
    }
}