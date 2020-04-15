import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ifmath-ng-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.scss']
})
export class BaseViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jQueryConfiguracaoSlideBar();
  }

  private jQueryConfiguracaoSlideBar(): void {
    $(document).ready(function () {
      $('[data-toggle="offcanvas"]').click(function () {
        $('.ifmath-view__row__offcanvas').toggleClass('active');
      });
    });
  }

}
