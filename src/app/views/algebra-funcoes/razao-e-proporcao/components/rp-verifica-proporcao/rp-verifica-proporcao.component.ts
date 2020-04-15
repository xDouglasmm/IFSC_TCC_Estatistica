import { HttpErrorResponse } from '@angular/common/http';
import { IVerificaProporcaoComand } from './../../shared/razao-e-proporcao.model';
import { ServicoRazaoProporcao } from './../../shared/razao-e-proporcao.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './rp-verifica-proporcao.component.html',
  styleUrls: ['./rp-verifica-proporcao.component.scss']
})
export class RpVerificaProporcaoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
    c: ['', Validators.required],
    d: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoRazaoProporcao) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const razaoProporcao: IVerificaProporcaoComand = this.form.value;

    this._servico.postVerificaProporcao(razaoProporcao)
      .take(1)
      .do(() => { this.loading = false; })
      .subscribe((response) => {
        if (response.sucesso) {
          this.resultados = <ResultadoViewModel[]>response.objeto;
        }

        this.loading = false;
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
        }
      });
  }

}
