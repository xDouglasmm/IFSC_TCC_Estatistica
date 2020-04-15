import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { ServicoProgressaoGeometrica } from '../../shared/progressao-geometrica.service';
import { IPGTermoGeralComand } from './../../shared/progressao-geometrica.model';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './pg-termo-geral.component.html',
  styleUrls: ['./pg-termo-geral.component.scss']
})
export class PgTermoGeralComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    q: ['', Validators.required],
    a1: ['', Validators.required],
    n: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];


  constructor(private fb: FormBuilder, private _servico: ServicoProgressaoGeometrica) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const progressaoGeometrica: IPGTermoGeralComand = this.form.value;

    this._servico.postTermoGeral(progressaoGeometrica)
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
