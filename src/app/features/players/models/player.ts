import { PlayerId } from '../../../shared/types/branded-types';
import { PlayerPosition } from './player-position';
import { PlayerRole } from './player-role';
import { Team } from '../../teams/models/team';

export interface Player {
  id: PlayerId;
  nickname: string;
  team: Team;
  role: PlayerRole;
  position: PlayerPosition;
}
