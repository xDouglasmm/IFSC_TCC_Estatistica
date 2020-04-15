import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[geo-host]'
})
export class GeoDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
