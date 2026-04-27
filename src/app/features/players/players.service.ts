import {Injectable} from '@angular/core';
import {BaseService} from '../../shared/utils/base-service';
import {Player, PlayerJsonProps} from './models/player.model';
import {AssetFileExtension, assets} from '../../shared/utils/assets-finder';
import {HttpClient} from '@angular/common/http';
import {PlayerMapper} from './player.mapper';

@Injectable({providedIn: 'root'})
export class PlayersService extends BaseService<Player, PlayerJsonProps> {
  protected override dataFilePath: string = assets('data/players', AssetFileExtension.JSON);

  constructor(protected override http: HttpClient) {
    super(http, PlayerMapper);
  }
}
