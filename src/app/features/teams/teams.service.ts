import { Team } from './models/team.model';
import { Injectable } from '@angular/core';
import { teamsData } from './teams-data';
import { TeamId } from '../../shared/types/branded-types';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private readonly teams: Array<Team> = teamsData;

  getTeams(): Array<Team> {
    return this.teams.sort((a, b) => a.name.localeCompare(b.name));
  }

  getTeamById(id: TeamId): Team | undefined {
    console.log(id);
    console.log(this.teams);
    return this.teams.find((t) => t.id.equals(id));
  }
}
