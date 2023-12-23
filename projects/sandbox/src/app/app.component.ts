import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './pages/comp1/comp1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Comp1Component],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'sandbox';
}
