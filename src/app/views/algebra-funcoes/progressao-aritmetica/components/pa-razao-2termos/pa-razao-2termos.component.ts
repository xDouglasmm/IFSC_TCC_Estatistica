import { ServicoProgressaoAritmetica } from './../../shared/progressao-aritmetica.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IRazao2TermosComand } from './../../shared/progressao-aritmetica.model';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OnInit, Component } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './pa-razao-2termos.component.html',
  styleUrls: ['./pa-razao-2termos.component.scss']
})
export class PaRazao2TermosComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    an: ['', Validators.required],
    a1: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoProgressaoAritmetica) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const progressaoAritmetica: IRazao2TermosComand = this.form.value;

    this._servico.postRazao2Termos(progressaoAritmetica)
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
