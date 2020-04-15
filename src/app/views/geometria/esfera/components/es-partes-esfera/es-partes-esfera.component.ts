import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifmath-es-partes-esfera',
  templateUrl: './es-partes-esfera.component.html',
  styleUrls: ['./es-partes-esfera.component.scss']
})
export class EsPartesEsferaComponent implements OnInit {

  buttons: Object[] = [
    { title: "Cunha esférica", route: "es_cunha_esferica" },
    { title: "Fuso esférico", route: "es_fuso_esferico" },
    { title: "Calota", route: "es_calota" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
