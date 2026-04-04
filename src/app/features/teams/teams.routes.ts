import { Routes } from '@angular/router';

export const teamsRoutes: Routes = [
  {
    path: 'teams',
    loadComponent: () => import('./components/teams-list/teams-list').then((m) => m.TeamsList),
  },
  {
    path: 'teams/:id/roster',
    pathMatch: 'full',
    loadComponent: () => import('./components/team-roster/team-roster').then((m) => m.TeamRoster),
  },
];
