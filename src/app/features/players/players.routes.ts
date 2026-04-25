import { Routes } from '@angular/router';

export const playersRoutes: Routes = [
  {
    path: 'players',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/list/player-list.component').then((m) => m.PlayerListComponent),
  },
];
