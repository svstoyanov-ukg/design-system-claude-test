import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'compensation',
    loadComponent: () =>
      import('./pages/compensation/compensation').then(
        (m) => m.CompensationComponent
      ),
  },
  { path: '', redirectTo: 'compensation', pathMatch: 'full' },
];
