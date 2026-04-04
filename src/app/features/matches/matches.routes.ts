import { Routes } from '@angular/router';

export const matchesRoutes: Routes = [
  {
    path: 'matches',
    loadComponent: () =>
      import('./components/matches-list/matches-list').then((m) => m.MatchesList),
  },
  {
    path: 'matches/:id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/match-details/match-details').then((m) => m.MatchDetails),
  },
];
