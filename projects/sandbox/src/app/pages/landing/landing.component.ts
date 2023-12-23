import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  landingProperty = "This is landing page";

  constructor(
    private router: Router,
  ){}

  onClick() {
    console.log("Clicked comp1");
    this.router.navigateByUrl('/comp1');
  }

}
