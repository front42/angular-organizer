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
  public numpadButtons: string[] = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  public screenValue: string = '0';
  public screenValueFontSize: string = '68px';

  constructor(private router: Router) {
    console.log(typeof this.screenValue);
  }

  public goHome() {
    this.router.navigate(['/']);
  }

  public makeCalc(value: string): void {
    let isDecimalPart: boolean = this.screenValue.includes('.');

    switch (value) {
      case 'AC':
        this.screenValue = '0';
        break;
      case '+/-':
        if (this.screenValue) this.screenValue = String(+this.screenValue * -1);
        break;
      case '%':
        this.screenValue = String(+this.screenValue / 100);
        break;
      case '÷':
      case '×':
      case '-':
      case '+':
      case '=':
        break;
      case '.':
        if (!isDecimalPart) this.screenValue += '.';
        break;
      default:
        if (!isNaN(+value) && this.screenValue != '0') {
          this.screenValue += value;
          if (this.screenValue.length > 14)
            this.screenValue = 'Hey, stop it please!';
        } else {
          this.screenValue = value;
        }
    }
    this.screenValueFontSize = this.screenValue.length > 7 ? '34px' : '68px';
  }
}
