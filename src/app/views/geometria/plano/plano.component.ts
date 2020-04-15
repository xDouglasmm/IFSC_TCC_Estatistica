import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var document: any;

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss']
})
export class PlanoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  private jQueryConfiguracaoSlideBar(): void {
    $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
      });
    });
  }

}
