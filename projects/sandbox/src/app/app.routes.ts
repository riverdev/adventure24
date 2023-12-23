import { Routes } from '@angular/router';
import { Comp1Component } from './pages/comp1/comp1.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'landing'},
  { path: 'landing', component: LandingComponent },
  { path: 'comp1', component: Comp1Component },
];
