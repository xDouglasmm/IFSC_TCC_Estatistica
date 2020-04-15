import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifmath-ci-areas',
  templateUrl: './ci-areas.component.html',
  styleUrls: ['./ci-areas.component.scss']
})
export class CiAreasComponent implements OnInit {

  buttons: Object[] = [
    { title: "Área das bases", route: "ci_area_bases" },
    { title: "Área lateral", route: "ci_area_lateral" },
    { title: "Área total", route: "ci_area_total" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
