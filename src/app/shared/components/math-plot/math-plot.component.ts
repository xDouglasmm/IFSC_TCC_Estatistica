import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'ifmath-math-plot',
  templateUrl: './math-plot.component.html',
  styleUrls: ['./math-plot.component.scss']
})

export class MathPlotComponent implements OnInit {

  public width = 800;
  public height = 450;
  // desired xDomain values
  public xScale: number[] = [-6, 6];
  public yScale: number[] = [-10, 10];

  private instance: any;
  private functionPlot: any;

  constructor() { }

  public ngOnInit() {
    this.functionPlot = require('function-plot');
    this.draw();
  }

  public draw(): void {
    this.functionPlot({
      title: '3x = 9',
      target: '#root',
      // grid: true,
      width: this.width,
      height: this.height,
      data: [
        { fn: '3x' },
        // { fn: '-x + 2' },
      ],
      annotations: [
        {
          x: 3,
          text: 'x = 3',
        },
        {
          y: 9,
          text: 'y = 9',
        },
      ]
    });
  }

  private computeYScale(width: number, height: number, xScale: number[]): number[] {
    const xDiff: number = xScale[1] - xScale[0];
    const yDiff: number = height * xDiff / width;
    return [-yDiff / 2, yDiff / 2];
  }

}
