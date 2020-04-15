import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'geo-btn',
  templateUrl: './geo-btn.component.html',
  styleUrls: ['./geo-btn.component.scss'],
})
export class GeoBtnComponent implements OnInit {

  @Input() name: string = '';
  @Input() route: string = '';

  constructor() { }

  ngOnInit() {
  }

}
