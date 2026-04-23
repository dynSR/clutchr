import { Routes } from '@angular/router';
import { homePageRoutes } from './features/homepage/homePage.routes';
import { errorsRoutes } from './features/errors/errors.routes';
import { teamsRoutes } from './features/teams/teams.routes';
import { playersRoutes } from './features/players/players.routes';

export const routes: Routes = [
  ...homePageRoutes,
  {
    path: 'design-system',
    pathMatch: 'full',
    loadComponent: () => import('./features/design-system').then((m) => m.DesignSystem),
  },
  ...teamsRoutes,
  ...playersRoutes,
  ...errorsRoutes,
];
