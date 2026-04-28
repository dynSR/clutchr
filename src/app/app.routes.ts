import { Routes } from '@angular/router';
import { homePageRoutes } from './features/homepage/homePage.routes';
import { errorsRoutes } from './features/errors/errors.routes';
import { teamRoutes } from './features/teams/teams.routes';
import { playersRoutes } from './features/players/players.routes';
import { articleRoutes } from './features/articles/article.routes';

export const routes: Routes = [
  {
    path: 'design-system',
    pathMatch: 'full',
    loadComponent: () => import('./features/design-system').then((m) => m.DesignSystem),
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () =>
      import('./core/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  ...homePageRoutes,
  ...articleRoutes,
  ...teamRoutes,
  ...playersRoutes,
  ...errorsRoutes,
];
