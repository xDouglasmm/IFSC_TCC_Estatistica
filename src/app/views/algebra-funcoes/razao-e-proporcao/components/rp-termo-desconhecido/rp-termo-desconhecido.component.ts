import { HttpErrorResponse } from '@angular/common/http';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ServicoRazaoProporcao } from './../../shared/razao-e-proporcao.service';
import { SoPodeUmaIncognita } from '../../shared/razao-e-proporcao.validation';
import { ITermoDesconhecidoComand } from './../../shared/razao-e-proporcao.model';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';


@Component({
  templateUrl: './rp-termo-desconhecido.component.html',
  styleUrls: ['./rp-termo-desconhecido.component.scss']
})
export class RpTermoDesconhecidoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
    c: ['', Validators.required],
    d: ['', Validators.required],
  }, { validator: SoPodeUmaIncognita });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoRazaoProporcao) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const razaoProporcao: ITermoDesconhecidoComand = this.form.value;

    this._servico.postTermoDesconhecido(razaoProporcao)
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
