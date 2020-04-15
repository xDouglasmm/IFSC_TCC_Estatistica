import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var document: any;

@Component({
  selector: 'app-angulo',
  templateUrl: './angulo.component.html',
  styleUrls: ['./angulo.component.scss']
})
export class AnguloComponent implements OnInit {

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
