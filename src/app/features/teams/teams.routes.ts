import { Routes } from '@angular/router';

export const teamRoutes: Routes = [
  {
    path: 'teams',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/list/team-list.component').then((m) => m.TeamListComponent),
  },
  {
    path: 'teams/:id/:slug',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/roster/team-roster.component').then((m) => m.TeamRosterComponent),
  },
];
