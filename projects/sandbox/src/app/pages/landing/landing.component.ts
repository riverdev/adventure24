import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  MyLibraryService,
  CountriesInterface,
  MyLibraryComponent,
} from 'my-library'; //'../../../../../my-library/src/public-api';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MyLibraryComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  landingProperty = 'This is landing page';
  listOfCountries!: CountriesInterface[];

  constructor(
    private router: Router,
    private mylibraryService: MyLibraryService
  ) {}

  ngOnInit() {
    this.mylibraryService
      .getCountries()
      .subscribe((res) => {
        console.log('hello from landing page');
        this.listOfCountries = res;
      });
  }

  ngOnDestroy(){}

  onClick() {
    console.log(this.listOfCountries);
    console.log('Clicked comp1');
    this.router.navigateByUrl('/comp1');
  }
}
