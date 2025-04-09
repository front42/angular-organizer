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
  public numpad: string[] = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '–', '1', '2', '3', '+', '0', '.', '='];
  public screenValue: string = '0';
  public screenValueFontSize: string = '68px';

  public firstArg: string = '';
  public secondArg: string = '';
  public operator: string = '';

  constructor(private router: Router) {}

  public goHome(): void {
    this.router.navigate(['/']);
  }

  public makeCalc(value: string): void {
    let isDecimalPart: boolean = this.screenValue.includes('.');

    switch (value) {
      case 'AC':
        this.reset();
        break;
      case '+/-':
        if (this.screenValue) this.screenValue = String(+this.screenValue * -1);
        break;
      case '%':
        this.screenValue = String(+this.screenValue / 100);
        break;
      case '÷':
      case '×':
      case '–':
      case '+':
      case '=':
        if (this.operator && !this.secondArg) {
          this.operator = value;
          console.log('Operator: ' + this.operator);
          return;
        }
        if (this.firstArg && this.operator) {
          this.secondArg = this.screenValue;
          console.log('second: ' + this.secondArg);
          this.getResult();
        }
        if (!this.firstArg) {
          this.firstArg = this.screenValue;
          console.log('first: ' + this.firstArg);
        }
        this.operator = value;
        console.log('Operator: ' + this.operator);
        break;
      case '.':
        if (!isDecimalPart) this.screenValue += '.';
        break;
      default:
        if (isNaN(+this.screenValue)) return;
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

    switch (this.operator) {
      case '÷':
        if (secondArg) {
          result = firstArg / secondArg;
        } else {
          result = `Can't divide by zero`;
        }
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
    this.screenValue = '0';
    this.firstArg = '';
    this.secondArg = '';
    this.operator = '';
  }
}
