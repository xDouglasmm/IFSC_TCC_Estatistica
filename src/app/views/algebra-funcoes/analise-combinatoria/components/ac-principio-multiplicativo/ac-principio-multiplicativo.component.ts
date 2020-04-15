import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { ServicoAnaliseCombinatoria } from './../../shared/analise-combinatoria.service';
import { IACPrincipioMultiplicativoComand } from './../../shared/analise-combinatoria.model';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './ac-principio-multiplicativo.component.html',
  styleUrls: ['./ac-principio-multiplicativo.component.scss']
})
export class AcPrincipioMultiplicativoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    s: ['', Validators.required],
    n: ['', Validators.required],
    p: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];


  constructor(private fb: FormBuilder, private _servico: ServicoAnaliseCombinatoria) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const analiseCombinatoria: IACPrincipioMultiplicativoComand = this.form.value;

    this._servico.postACPrincipioMultiplicativo(analiseCombinatoria)
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
