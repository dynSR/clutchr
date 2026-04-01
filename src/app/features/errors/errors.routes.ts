import { Routes } from '@angular/router';

export const errorsRoutes: Routes = [
  {
    path: 'error-404',
    pathMatch: 'full',
    loadComponent: () => import('./components/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: 'error-500',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/serveur-error/serveur-error').then((m) => m.ServeurError),
  },
  {
    path: '**',
    redirectTo: 'error-404',
  },
];
