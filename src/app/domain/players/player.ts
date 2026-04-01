import { PlayerId } from '../../types/branded-types';
import { PlayerPosition } from './player-position';
import { PlayerRole } from './player-role';
import { Team } from '../teams/team';

export interface Player {
  id: PlayerId;
  nickname: string;
  team: Team;
  role: PlayerRole;
  position: PlayerPosition;
}
