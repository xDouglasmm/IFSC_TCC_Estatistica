import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'geo-rightbar',
  templateUrl: './geo-rightbar.component.html',
  styleUrls: ['./geo-rightbar.component.scss']
})
export class GeoRightbarComponent implements OnInit {

  @Input() cards: Object[] = [];

  @Input() verifyPosition: any;

  constructor() { }

  ngOnInit() {
  }

}
