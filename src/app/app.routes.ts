import { Routes } from '@angular/router';
import { errorsRoutes } from './features/errors/errors.routes';
import { homeRoutes } from './features/home/home.routes';
import { teamsRoutes } from './features/teams/teams.routes';

export const routes: Routes = [...homeRoutes, ...teamsRoutes, ...errorsRoutes];
