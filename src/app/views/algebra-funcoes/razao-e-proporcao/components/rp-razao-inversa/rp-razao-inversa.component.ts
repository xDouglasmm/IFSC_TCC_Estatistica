import { HttpErrorResponse } from '@angular/common/http';
import { ServicoRazaoProporcao } from './../../shared/razao-e-proporcao.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IRazaoInversaComand } from '../../shared/razao-e-proporcao.model';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './rp-razao-inversa.component.html',
  styleUrls: ['./rp-razao-inversa.component.scss']
})
export class RpRazaoInversaComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    a: ['', Validators.required],
    b: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoRazaoProporcao) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const razaoProporcao: IRazaoInversaComand = this.form.value;

    this._servico.postRazaoInversa(razaoProporcao)
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
