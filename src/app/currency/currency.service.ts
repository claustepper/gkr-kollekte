import { Injectable, OnInit } from '@angular/core';
import { CurrencyModel } from "./currency.model";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService implements OnInit {

  currencies: CurrencyModel[] = [];

  constructor() {
    this.addCurrency(new CurrencyModel("R 200", 200, 0, 0));
    this.addCurrency(new CurrencyModel("R 100", 100, 0, 0));
    this.addCurrency(new CurrencyModel("R 50", 50, 0, 0));
    this.addCurrency(new CurrencyModel("R 20", 20, 0, 0));
    this.addCurrency(new CurrencyModel("R 10", 10, 0, 0));
    this.addCurrency(new CurrencyModel("R 5", 5, 0, 0));
    this.addCurrency(new CurrencyModel("R 2", 2, 0, 0));
    this.addCurrency(new CurrencyModel("R 1", 1, 0, 0));
  }

  ngOnInit() {
  }

  addCurrency(currency: CurrencyModel) {
    this.currencies.push(currency);
  }

  getCurrencies() {
    return this.currencies;
  }

  updateCount(value: number, count: number) {
    for (let denom of this.currencies) {
      if (denom.value === value) {
        denom.count = count;
        denom.subtotal = denom.value * denom.count;
      }
    }
  }

}
