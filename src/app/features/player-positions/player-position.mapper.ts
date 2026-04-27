import {Mapper} from '../../shared/interfaces/mapper';
import {PlayerPosition, PlayerPositionJsonProps} from './models/player-position.model';

export const PlayerPositionMapper: Mapper<PlayerPosition, PlayerPositionJsonProps> = {
  fromJSON: (props: PlayerPositionJsonProps): PlayerPosition => new PlayerPosition(props),
  toJSON: (playerPosition: PlayerPosition): PlayerPositionJsonProps => ({
    id: playerPosition.id,
    name: playerPosition.name,
    acronym: playerPosition.acronym,
    metadata: playerPosition.metadata
  }),
};
