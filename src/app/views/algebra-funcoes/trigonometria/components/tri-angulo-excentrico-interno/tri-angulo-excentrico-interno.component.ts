import { HttpErrorResponse } from '@angular/common/http';
import { IAnguloExcentricoInternoComand } from './../../shared/trigonometria.model';
import { ServicoTrigonometria } from './../../shared/trigonometria.service';
import { ResultadoViewModel } from '../../../../../shared/models/resultado';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './tri-angulo-excentrico-interno.component.html',
  styleUrls: ['./tri-angulo-excentrico-interno.component.scss']
})
export class TriAnguloExcentricoInternoComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    graus: ['', Validators.required],
    grausAux: ['', Validators.required],
  });

  loading: boolean;
  resultados: ResultadoViewModel[];

  constructor(private fb: FormBuilder, private _servico: ServicoTrigonometria) { }

  ngOnInit() {
    this.resultados = [];
  }

  onSubmit(): void {
    this.loading = true;
    const trigonometria: IAnguloExcentricoInternoComand = this.form.value;

    this._servico.postAnguloExcentricoInterno(trigonometria)
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
