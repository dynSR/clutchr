import { Routes } from '@angular/router';

export const teamsRoutes: Routes = [
  {
    path: 'teams',
    pathMatch: 'full',
    loadComponent: () => import('./components/teams-list/teams-list').then((m) => m.TeamsList),
  },
];
