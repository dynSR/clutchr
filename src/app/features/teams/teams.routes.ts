import { Routes } from '@angular/router';

export const teamsRoutes: Routes = [
  {
    path: 'teams',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/teams-list/teams-list.component').then((m) => m.TeamsListComponent),
  },
  {
    path: 'teams/:id/:slug',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/team-roster/team-roster.component').then((m) => m.TeamRosterComponent),
  },
];
