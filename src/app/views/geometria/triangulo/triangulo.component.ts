import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var document: any;

@Component({
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.css']
})
export class TrianguloComponent implements OnInit {

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
