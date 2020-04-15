import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posicoes-relativas-reta',
  templateUrl: './posicoes-relativas-reta.component.html',
  styleUrls: ['./posicoes-relativas-reta.component.scss']
})
export class PosicoesRelativasRetaComponent implements OnInit {

  public formModel: FormGroup = this.fb.group({
    retas: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public onSetRetasParalelas(): void {
    this.formModel.get('retas').setValue('um');
  }

  public onSetRetasConcorrentes(): void {
    this.formModel.get('retas').setValue('dois');
  }
}
