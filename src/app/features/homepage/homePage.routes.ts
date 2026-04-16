import {Routes} from '@angular/router';

export const homePageRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./components/homepage.component').then((m) => m.HomepageComponent)
  }
];
