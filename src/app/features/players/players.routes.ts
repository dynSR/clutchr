import { Routes } from '@angular/router';

export const playersRoutes: Routes = [
  {
    path: 'players',
    loadComponent: () =>
      import('./components/players-list/players-list').then((m) => m.PlayersList),
  },
  {
    path: 'players/:id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/player-details/player-details').then((m) => m.PlayerDetails),
  },
];
