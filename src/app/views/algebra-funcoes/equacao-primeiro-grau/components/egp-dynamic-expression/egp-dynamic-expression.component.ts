import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { ServicoEquacaoPrimeiroGrau } from '../../shared/equacao-primeiro-grau.service';
import { RespostaJson } from '../../../../../core/modelos/resposta-json';
import { ModalErrorComponent } from '../../../../../shared/components/modal-error/modal-error.component';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './egp-dynamic-expression.component.html',
  styleUrls: ['./egp-dynamic-expression.component.scss'],
})
export class EgpDynamicExpressionComponent {

  @ViewChild('modalError') public modalError: ModalErrorComponent;
  public loading: boolean;
  public errorMessage: string;
  public results: ResultadoViewModel[];

  public formModel: FormGroup = this.fb.group({
    expression: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private _servico: ServicoEquacaoPrimeiroGrau) { }

  public onSubmit(): void {
    this.loading = true;
    this.results = [];

    this._servico.postDynamicResolution(this.formModel.value)
      .take(1)
      .do(() => {
        this.loading = false;
      }).subscribe(
        (response: RespostaJson) => {
          if (response.sucesso) {
            this.results = <ResultadoViewModel[]>response.objeto;
          } else {
            this.errorMessage =  response.mensagem.split(':')[1].replace('}', '');
            this.modalError.show();
          }

        }, (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred.
            console.log('An error occurred:', err.error.message);
          } else {
            // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
            // Log errors if any
            this.loading = false;
            this.errorMessage = 'Aconteceu alguns error de conexão com a internet, verifique a sua rede: ' +  err.message;
            this.modalError.show();
          }
        });
  }

  public onClear(): void {
    this.results = [];
  }
}
