import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var document: any;

@Component({
    templateUrl: './reta.component.html',
    styleUrls: ['./reta.component.scss']
})
export class RetaComponent implements OnInit {

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
