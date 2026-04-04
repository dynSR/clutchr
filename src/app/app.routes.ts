import { Routes } from '@angular/router';
import { errorsRoutes } from './features/errors/errors.routes';
import { homeRoutes } from './features/home/home.routes';
import { teamsRoutes } from './features/teams/teams.routes';
import { playersRoutes } from './features/players/players.routes';
import { matchesRoutes } from './features/matches/matches.routes';

export const routes: Routes = [
  ...homeRoutes,
  ...teamsRoutes,
  ...playersRoutes,
  ...matchesRoutes,
  ...errorsRoutes,
];
