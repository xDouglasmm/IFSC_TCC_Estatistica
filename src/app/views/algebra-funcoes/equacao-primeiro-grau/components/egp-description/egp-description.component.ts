import { Component } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  templateUrl: './egp-description.component.html'
})
export class EgpDescriptionComponent  {

  public equationOne: string [] = [];
  public equationTwo: string [] = [];
  public isVisibleEquationOne = false;
  public isVisibleEquationTwo = false;
  
  public options: KatexOptions = {
    displayMode: true,
  };

  constructor() {
    this.createFirstEquation();
    this.createSecondEquation();
   }


  private createFirstEquation(): void {
    this.equationOne.push('3x -4 = x + 6');
    this.equationOne.push('3x -x = 6 + 4');
    this.equationOne.push('2x = 10');
    this.equationOne.push('x = \\frac{10}{2}');
    this.equationOne.push('x = 5');
  }

  private createSecondEquation(): void {
    this.equationTwo.push('3(x - 4) = 7x - 2');
    this.equationTwo.push('3x -12 = 7x -2');
    this.equationTwo.push('3x -7x = -2 + 12');
    this.equationTwo.push('-4x = 10');
    this.equationTwo.push('-4x * (-1) = 10 * (-1)');
    this.equationTwo.push('4x = -10');
    this.equationTwo.push('x = \\frac{-10}{4}');
    this.equationTwo.push('x = \\frac{-5}{2}');
  }

  public getArrayItem(array: string [], index: number): string {
    return array[index];
  }
}
