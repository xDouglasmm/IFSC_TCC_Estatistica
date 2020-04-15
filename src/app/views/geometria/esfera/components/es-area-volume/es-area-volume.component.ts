import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifmath-es-area-volume',
  templateUrl: './es-area-volume.component.html',
  styleUrls: ['./es-area-volume.component.scss']
})
export class EsAreaVolumeComponent implements OnInit {

  buttons: Object[] = [
    { title: "Área da esfera", route: "es_area" },
    { title: "Volume da esfera", route: "es_volume" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
