import { Routes } from '@angular/router';

export const playersRoutes: Routes = [
  {
    path: 'players',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/players-list/players-list').then((m) => m.PlayersList),
  },
];
