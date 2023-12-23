import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: '', pathMatch:'full',},
  //{path: '', pathMatch:'full', redirectTo:'comp1'},
  {path: 'comp1', component: Comp1Component}
];
