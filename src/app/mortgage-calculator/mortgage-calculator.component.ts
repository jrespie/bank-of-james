import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  public constructor() { }

  @Input() public num1: number = 0;
  @Input() public num2: number = 0;
  public result: number;

  public ngOnInit(): void {
  }

  public calculateResult(): void {
    this.result = this.num1 + this.num2;
  }

}
