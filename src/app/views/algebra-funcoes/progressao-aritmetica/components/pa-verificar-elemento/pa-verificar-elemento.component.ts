import { HttpErrorResponse } from '@angular/common/http';
import { IVerificarElementoComand } from './../../shared/progressao-aritmetica.model';
import { ServicoProgressaoAritmetica } from './../../shared/progressao-aritmetica.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './pa-verificar-elemento.component.html',
  styleUrls: ['./pa-verificar-elemento.component.scss']
})
export class PaVerificarElementoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    an: ['', Validators.required],
    a1: ['', Validators.required],
    r: ['', Validators.required],
    n: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoProgressaoAritmetica) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const progressaoAritmetica: IVerificarElementoComand = this.form.value;

    this._servico.postVerificarElemento(progressaoAritmetica)
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
