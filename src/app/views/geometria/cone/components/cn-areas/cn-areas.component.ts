import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifmath-cn-areas',
  templateUrl: './cn-areas.component.html',
  styleUrls: ['./cn-areas.component.scss']
})
export class CnAreasComponent implements OnInit {

  buttons: Object[] = [
    { title: "Área da base", route: "cn_area_base" },
    { title: "Área lateral", route: "cn_area_lateral" },
    { title: "Área total", route: "cn_area_total" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
