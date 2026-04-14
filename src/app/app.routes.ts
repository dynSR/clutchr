import {Routes} from '@angular/router';
import {homePageRoutes} from './features/homepage/homePageRoutes';
import {errorsRoutes} from './features/errors/errors.routes';

export const routes: Routes = [
  ...homePageRoutes,
  {
    path: 'design-system',
    pathMatch: 'full',
    loadComponent: () => import('./features/design-system').then((m) => m.DesignSystem)
  },
  ...errorsRoutes
];
