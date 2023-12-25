import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountriesInterface } from './models/countries';

@Injectable({
  providedIn: 'root',
})
export class MyLibraryService {
  constructor() {}

  getCountries(): Observable<CountriesInterface[]> {
    // Source for country codes is :   https://www.iban.com/country-codes
    return of([
      {
        code_alpha_2: 'CA', // CA=Canada, United States = US
        code_alpha_3: 'CAN', // CAN=Canada, United States = USA
        code_numeric: 124, // 124=Canada, 840=United States
        name: 'Canada',
        price_usd: 23,
        highlight_points: ['Good point 1', 'Good point 2'],
        image_flag: 'https://s.w.org/images/core/emoji/14.0.0/svg/1f1e8-1f1e6.svg',
      },
      {
        code_alpha_2: 'US', // CA=Canada, United States = US
        code_alpha_3: 'USA', // CAN=Canada, United States = USA
        code_numeric: 840, // 124=Canada, 840=United States
        name: 'United States',
        price_usd: 42,
        highlight_points: ['Good point 1', 'Good point 2'],
        image_flag: 'https://s.w.org/images/core/emoji/14.0.0/svg/1f1fa-1f1f8.svg',
      },
      {
        code_alpha_2: 'IN', // CA=Canada, United States = US
        code_alpha_3: 'IND', // CAN=Canada, United States = USA
        code_numeric: 356, // 124=Canada, 840=United States
        name: 'INDIA',
        price_usd: 42.90,
        highlight_points: ['Good point 1', 'Good point 2'],
        image_flag: 'https://s.w.org/images/core/emoji/14.0.0/svg/1f1ee-1f1f3.svg',
      },
      {
        code_alpha_2: 'MA', // CA=Canada, United States = US
        code_alpha_3: 'MAR', // CAN=Canada, United States = USA
        code_numeric: 504, // 124=Canada, 840=United States
        name: 'MOROCCO',
        price_usd: 99.90,
        highlight_points: ['Good point 1', 'Good point 2'],
        image_flag: 'https://s.w.org/images/core/emoji/14.0.0/svg/1f1f2-1f1e6.svg',
      },
      {
        code_alpha_2: 'VI', // CA=Canada, United States = US
        code_alpha_3: 'VNM', // CAN=Canada, United States = USA
        code_numeric: 704, // 124=Canada, 840=United States
        name: 'VIETNAM',
        price_usd: 52,
        highlight_points: ['Good point 1', 'Good point 2'],
        image_flag: 'https://s.w.org/images/core/emoji/14.0.0/svg/1f1fb-1f1f3.svg',
      },
      {
        code_alpha_2: 'LK', // CA=Canada, United States = US
        code_alpha_3: 'LKA', // CAN=Canada, United States = USA
        code_numeric: 144, // 124=Canada, 840=United States
        name: 'SRI LANKA',
        price_usd: 74,
        highlight_points: ['Good point 1', 'Good point 2'],
        image_flag: 'https://s.w.org/images/core/emoji/14.0.0/svg/1f1f1-1f1f0.svg',
      },
    ]);
  }
}
