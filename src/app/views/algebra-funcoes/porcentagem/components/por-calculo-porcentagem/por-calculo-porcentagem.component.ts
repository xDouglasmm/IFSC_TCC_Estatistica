import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { ServicoPorcentagem } from '../../shared/porcentagem.service';
import { IPorCalculoPorcentagemComand } from '../../shared/porcentagem.model';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './por-calculo-porcentagem.component.html',
  styleUrls: ['./por-calculo-porcentagem.component.scss']
})
export class PorCalculoPorcentagemComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    x: ['', Validators.required],
    n: ['', Validators.required]
  });

  loading: boolean;
  resultados: ResultadoViewModel[];


  constructor(private fb: FormBuilder, private _servico: ServicoPorcentagem) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const porcentagem: IPorCalculoPorcentagemComand = this.form.value;

    this._servico.postPorCalculoPorcentagem(porcentagem)
    .take(1)
    .do(() => {this.loading = false;})
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
