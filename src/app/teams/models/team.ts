import { PlayerId, TeamId } from '../../types/branded-types';

export interface Team {
  id: TeamId;
  name: string;
  players: PlayerId[];
  logo: string;
}
