import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculatorComponent } from './mortgage-calculator.component';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate a correct mortage repayment value', () => {
    component.housePrice=780000;
    component.deposit=156000;
    component.interestRate=4;
    component.term=25;
    component.calculateResult();
    expect(component.result).toEqual(3293.7018834580863);
  })
});
