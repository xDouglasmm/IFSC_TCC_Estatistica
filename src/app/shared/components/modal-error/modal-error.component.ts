import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ifmath-ng-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent {

  constructor() { }

  public show(): void {
    $('#modalErro').modal('show');
  }

}
