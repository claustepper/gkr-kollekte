import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material";
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { CurrencyModel } from "../currency/currency.model";
import { CurrencyService } from "../currency/currency.service";

export interface Diens {
  value: number;
  viewValue: string;
}

export interface Area {
  value: string;
  viewValue: string;
}

export interface Bag {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class CaptureComponent implements OnInit {

  dienste: Diens[] = [
    {value: 8, viewValue: '08h00'},
    {value: 10, viewValue: '10h00'},
    {value: 18, viewValue: '18h00'},
    {value: 9, viewValue: '09h00'},
  ];

  areas: Area[] = [
    {value: 'binne', viewValue: 'Binne'},
    {value: 'Deure', viewValue: 'Deure'},
  ];

  bags: Bag[] = [
    {value: 'A', viewValue: 'Sak A'},
    {value: 'B', viewValue: 'Sak B'},
  ];

  values: CurrencyModel[] = [];

  constructor(private currency_service: CurrencyService) {}

  ngOnInit() {
    this.values = this.currency_service.getCurrencies();
  }

  update(value, event) {
    this.currency_service.updateCount(value, Number(event.target.value));
  }

}
