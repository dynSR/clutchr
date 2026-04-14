import { Routes } from '@angular/router';

export const errorsRoutes: Routes = [
  {
    path: 'error-404',
    pathMatch: 'full',
    loadComponent: () => import('./components/not-found.component').then((m) => m.NotFoundComponent),
  },
  {
    path: 'error-500',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/serveur-error.component').then((m) => m.ServeurErrorComponent),
  },
  {
    path: '**',
    redirectTo: 'error-404',
  },
];
