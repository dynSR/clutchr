import {Mapper} from '../../shared/interfaces/mapper';
import {Player, PlayerJsonProps} from './models/player.model';

export const PlayerMapper: Mapper<Player, PlayerJsonProps> = {
  fromJSON: (props: PlayerJsonProps): Player => new Player(props),
  toJSON: (player: Player): PlayerJsonProps => ({
    id: player.id,
    tag: player.tag,
    number: player.number,
    identity: player.identity,
    position: player.position,
    metadata: player.metadata
  }),
};
