import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-axiomas-reta',
  templateUrl: './axiomas-reta.component.html',
  styleUrls: ['./axiomas-reta.component.scss']
})
export class AxiomasRetaComponent implements OnInit {

  public formModel: FormGroup = this.fb.group({
    axioma: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public onSetAxioma1(): void {
    this.formModel.get('axioma').setValue('um');
  }

  public onSetAxioma2(): void {
    this.formModel.get('axioma').setValue('dois');
  }

  public onSetAxioma3(): void {
    this.formModel.get('axioma').setValue('tres');
  }
}
