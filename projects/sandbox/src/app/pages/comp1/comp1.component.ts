import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html'
})
export class Comp1Component {
  comp1Property = "This is comp1";

  constructor(
    private router: Router,
  ){}


  onClickHome(){
    console.log("Clicked home");
    this.router.navigateByUrl('/');
  }

}
