import { inject, Injectable } from '@angular/core';
import { BaseService } from '../../shared/utils/base-service';
import { PlayerPosition, PlayerPositionJsonProps } from './models/player-position.model';
import { AssetFileExtension, assets } from '../../shared/utils/assets-finder';
import { HttpClient } from '@angular/common/http';
import { PlayerPositionMapper } from './player-position.mapper';

@Injectable({ providedIn: 'root' })
export class PlayerPositionService extends BaseService<PlayerPosition, PlayerPositionJsonProps> {
  protected override dataFilePath: string = assets(
    'data/player-positions',
    AssetFileExtension.JSON,
  );

  constructor() {
    super(inject(HttpClient), PlayerPositionMapper);
  }
}
