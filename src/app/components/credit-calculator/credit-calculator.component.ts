import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CreditCalculatorData} from '../../interfaces/CreditCalculatorData';
import {Car} from '../../interfaces/Car';
import {Slider} from '../../interfaces/Slider';

@Component({
  selector: 'app-credit-calculator',
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.css']
})
export class CreditCalculatorComponent implements OnInit {
  @Input() car: Car;
  @Output() close = new EventEmitter<null>();
  private requestSent = false;
  public creditData: CreditCalculatorData = {
    initialFeePercents: 5,
    creditTerm: null,
    initialFeeValue: 10000,
    loanPayment: 10000,
    interestRate: 8,
    totalCreditPayment: null,
    loanPaymentActual: 10000,
  };
  public initialFeeSlider: Slider;
  public loanPaymentSlider: Slider;
  public creditTermSlider: Slider;

  constructor() {

  }

  ngOnInit(): void {
    this.creditTermSlider = {
      min: 12,
      max: 120,
      step: 12,
    };
    this.loanPaymentSlider = {
      min: 1000,
      max: this.car && this.car.price || 0,
      step: 1000,
    };
    this.initialFeeSlider = {
      min: 10,
      max: 90,
      step: 5,
    };
  }

  closeModal(): void {
    this.close.emit(null);
  }

  recalculateInitialFee(): void {
    this.recalculateCreditConditions();
    this.creditData.initialFeeValue = (this.car.price / 100) * this.creditData.initialFeePercents;
  }

  recalculateLoanPayment(): void {
    this.recalculateCreditConditions();
    this.creditData.creditTerm = (this.creditData.loanPayment / 1000) * 12;
  }

  recalculateCreditTerm(): void {
    this.recalculateCreditConditions();
    this.creditData.loanPayment = (this.creditData.creditTerm / 12) * 1000;
  }

  recalculateCreditConditions(): void {
    if (this.creditData.initialFeeValue > 2000 && this.creditData.loanPayment < 10000 && this.creditData.creditTerm < 60) {
      this.creditData.interestRate = 12.3;
      this.creditData.loanPaymentActual = 9800;
    } else {
      this.creditData.interestRate = 8;
      this.creditData.loanPaymentActual = this.creditData.loanPayment;
    }
  }

  sendRequest(): void {
    this.requestSent = true;
  }
}
