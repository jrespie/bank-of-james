import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  constructor() { }

  @Input() num1: number;
  @Input() num2: number;
  result: number;

  ngOnInit(): void {
  }

  calculateResult(): void {
    this.result = this.num1 + this.num2;
  }

}
