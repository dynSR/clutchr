import { Team } from './models/team.model';
import { inject, Injectable } from '@angular/core';
import { AssetFileExtension, assets } from '../../shared/utils/assets-finder';
import { BaseService } from '../../shared/utils/base-service';
import { HttpClient } from '@angular/common/http';
import { TeamMapper } from './team.mapper';
import { TeamRaw } from './types/team.types';

@Injectable({ providedIn: 'root' })
export class TeamService extends BaseService<Team, TeamRaw> {
  protected override dataFilePath: string = assets('data/teams', AssetFileExtension.JSON);

  constructor() {
    super(inject(HttpClient), TeamMapper);
  }
}
