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
  @Input() public interestRate: number=4.00;
  @Input() public term: number=25;
  public lowEquityMargin: number=0.75
  public result: string;
  public interestOnlyResult: string;

  public ngOnInit(): void {
  }

  private calculateLoanAmount() {
    const loanAmount = this.housePrice - this.deposit;
    console.log(`Loan Amount: ${loanAmount}`)
    return loanAmount;
  }

  private calculateMonthlyInterestRate() {
    var monthlyInterestRate=0;
    if(this.lowEquityMarginIsApplicable()) {
      monthlyInterestRate = (this.interestRate+this.lowEquityMargin)/100/12;
      console.log("Low Equity Margin applies");
    }
    else{
      monthlyInterestRate = this.interestRate / 100 / 12;
    }
    console.log(`Monthly Interest Rate: ${monthlyInterestRate}`)
    return monthlyInterestRate;
  }
  private calculateMonthsOfLoan() {
    const monthsOfLoan = this.term*12;
    console.log(`Months of Loan: ${monthsOfLoan}`)
    return monthsOfLoan;
  }

  public lowEquityMarginIsApplicable(): boolean {
    if (this.deposit / this.housePrice < 0.2) {
      return true;
    }
    else {
      return false;
    }
  }

  public calculateResult(): void {
    this.calculateRepayment();
    this.calculateInterestOnly();
  }

  public calculateRepayment(): void {
    //mortgage calculation formula from
    //https://www.businessinsider.com/personal-finance/how-to-calculate-mortgage-payment
    const P = this.calculateLoanAmount();
    const i = this.calculateMonthlyInterestRate();
    const n = this.calculateMonthsOfLoan();

    const rawResult = P*(i*(Math.pow(1+i,n)))/(Math.pow((1+i),n)-1);
    this.result = rawResult.toFixed(2);
  }

  public calculateInterestOnly(): void {
    const P = this.calculateLoanAmount();
    const i = this.calculateMonthlyInterestRate();

    const rawResult = P*i;
    this.interestOnlyResult = rawResult.toFixed(2);
  }

  public returnTrue(): boolean {
    return true;
  }

}
