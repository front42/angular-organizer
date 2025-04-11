import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss',
  imports: [NgFor],
})
export class CalcComponent {
  protected numpad: string[] = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '–', '1', '2', '3', '+', '0', '.', '='];
  protected screenValue: string = '0';
  protected screenValueFontSize: string = '68px';
  private firstArg: string = '';
  private secondArg: string = '';
  private operator: string = '';
  private calcFinished: boolean = false;

  constructor(private router: Router) {}

  protected goHome(): void {
    this.router.navigate(['/']);
  }

  protected makeCalc(value: string): void {
    let isDecimalPart: boolean = this.screenValue.includes('.');

    switch (value) {
      case 'AC':
        this.reset();
        this.screenValue = '0';
        break;
      case '+/-':
        if (isNaN(+this.screenValue)) return;
        this.screenValue = String(+this.screenValue * -1);
        break;
      case '%':
        if (isNaN(+this.screenValue)) return;
        this.screenValue = String(+this.screenValue / 100);
        this.calcFinished = true;
        break;
      case '÷':
      case '×':
      case '–':
      case '+':
        if (isNaN(+this.screenValue)) return;
        this.calcFinished = false;
        if (this.operator && !this.secondArg) {
          this.operator = value;
          console.log('operator: ' + this.operator); // console.log to remove
          return;
        }
        if (this.firstArg && this.operator) {
          this.secondArg = this.screenValue;
          console.log('second: ' + this.secondArg); // console.log to remove
          this.getResult();
        }
        if (!this.firstArg) {
          this.firstArg = this.screenValue;
          console.log('first: ' + this.firstArg); // console.log to remove
        }
        this.operator = value;
        console.log('operator: ' + this.operator); // console.log to remove
        break;
      case '=':
        if (isNaN(+this.screenValue)) return;
        this.calcFinished = true;
        if (this.firstArg && this.operator) {
          this.secondArg = this.screenValue;
          console.log('second: ' + this.secondArg); // console.log to remove
          this.getResult();
        }
        this.reset();
        break;
      case '.':
        if (!isDecimalPart && !isNaN(+this.screenValue) && !this.calcFinished) this.screenValue += '.';
        break;
      default:
        if (isNaN(+this.screenValue)) {
          this.reset;
          this.screenValue = '0';
        }
        if (this.calcFinished) {
          this.reset();
          this.screenValue = '0';
          this.calcFinished = false;
        }
        if (this.screenValue !== '0') {
          this.screenValue += value;
          if (this.screenValue.length > 14) this.screenValue = 'Hey, stop it please!';
        } else {
          this.screenValue = value;
        }
        if (this.firstArg && this.operator && !this.secondArg) {
          this.secondArg = this.screenValue = value;
        }
    }
    this.screenValueFontSize = this.screenValue.length > 7 ? '34px' : '68px';
  }

  private getResult(): void {
    let result: number | string = 0;
    const firstArg = parseFloat(this.firstArg);
    const secondArg = parseFloat(this.secondArg);
    if (!firstArg || !secondArg) return;

    switch (this.operator) {
      case '÷':
        result = secondArg ? firstArg / secondArg : `Can't divide by zero`;
        break;
      case '×':
        result = firstArg * secondArg;
        break;
      case '–':
        result = firstArg - secondArg;
        break;
      case '+':
        result = firstArg + secondArg;
        break;
    }
    this.reset();
    this.screenValue = String(result);
  }

  private reset(): void {
    this.firstArg = this.secondArg = this.operator = '';
  }
}
