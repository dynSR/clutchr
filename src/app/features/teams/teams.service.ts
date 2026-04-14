import { Team } from './models/team';
import { Injectable } from '@angular/core';
import { teamsData } from './teams-data';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private readonly teams: Array<Team> = teamsData;

  getTeams(): Array<Team> {
    return this.teams;
  }
}
