import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  {
    path: 'shop',
    loadChildren: () =>
      import('./app/fake-shop/routes').then((mod) => mod.routes),
  },
];
