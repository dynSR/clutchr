import { RawTeam, Team } from './models/team.model';
import { Injectable } from '@angular/core';
import { AssetFileExtension, assets } from '../../shared/utils/assets-finder';
import { BaseService } from '../../shared/utils/base-service';
import { HttpClient } from '@angular/common/http';
import { TeamMapper } from './team-mapper';

@Injectable({ providedIn: 'root' })
export class TeamService extends BaseService<Team, RawTeam> {
  protected override dataFilePath: string = assets('data/teams', AssetFileExtension.JSON);

  constructor(protected override http: HttpClient) {
    super(http, TeamMapper);
  }
}
