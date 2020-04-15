import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var document: any;

@Component({
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.scss']
})
export class PontoComponent implements OnInit {

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
