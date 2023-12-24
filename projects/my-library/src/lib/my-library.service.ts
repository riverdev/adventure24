import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountriesInterface } from './models/countries';

@Injectable({
  providedIn: 'root',
})
export class MyLibraryService {
  constructor() {}

  getCountries(): Observable<CountriesInterface[]> {
    return of([
      {
        code_alpha_2: 'CA', // CA=Canada, United States = US
        code_alpha_3: 'CAN', // CAN=Canada, United States = USA
        code_numeric: 124, // 124=Canada, 840=United States
        name: 'Canada',
        price_usd: 79.90,
        highlight_points: ['Good point 1', 'Good point 2'],
      },
      {
        code_alpha_2: 'US', // CA=Canada, United States = US
        code_alpha_3: 'USA', // CAN=Canada, United States = USA
        code_numeric: 840, // 124=Canada, 840=United States
        name: 'United States',
        price_usd: 79.90,
        highlight_points: ['Good point 1', 'Good point 2'],
      },
      
    ]);
  }
}
