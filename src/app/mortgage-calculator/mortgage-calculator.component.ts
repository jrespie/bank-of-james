import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  public constructor() { }

  @Input() public housePrice: number = 780000;
  @Input() public deposit: number = 156000;
  @Input() public interestRate: number=4;
  @Input() public term: number=25;
  public result: number;

  public ngOnInit(): void {
  }

  private calculateLoanAmount() {
    const loanAmount = this.housePrice - this.deposit;
    console.log(`Loan Amount: ${loanAmount}`)
    return loanAmount;
  }
  private calculateMonthlyInterestRate() {
    const monthlyInterestRate = this.interestRate/100/12;
    console.log(`Monthly Interest Rate: ${monthlyInterestRate}`)
    return monthlyInterestRate;
  }
  private calculateMonthsOfLoan() {
    const monthsOfLoan = this.term*12;
    console.log(`Months of Loan: ${monthsOfLoan}`)
    return monthsOfLoan;
  }

  public calculateResult(): void {
    //mortgage calculation formula from
    //https://www.businessinsider.com/personal-finance/how-to-calculate-mortgage-payment
    const P = this.calculateLoanAmount();
    const i = this.calculateMonthlyInterestRate();
    const n = this.calculateMonthsOfLoan();

    this.result =  P*(i*(Math.pow(1+i,n)))/(Math.pow((1+i),n)-1);
  }

}
