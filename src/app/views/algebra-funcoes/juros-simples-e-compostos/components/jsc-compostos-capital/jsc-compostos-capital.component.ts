import { HttpErrorResponse } from '@angular/common/http';
import { ICompostoCapitalComand } from '../../shared/juros-simples-e-compostos.model';
import { ServicoJurosSimplesComposto } from '../../shared/juros-simples-e-compostos.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './jsc-compostos-capital.component.html',
  styleUrls: ['./jsc-compostos-capital.component.scss']
})
export class JscCompostosCapitalComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    i: ['', Validators.required],
    t: ['', Validators.required],
    j: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoJurosSimplesComposto) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const jurosSimplesComposto: ICompostoCapitalComand = this.form.value;

    this._servico.postCompostoCapital(jurosSimplesComposto)
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
