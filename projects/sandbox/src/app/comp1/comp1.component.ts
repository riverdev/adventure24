import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html'
})
export class Comp1Component {
  comp1Property = "Hello from comp1";

}
