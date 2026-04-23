import { PlayerPositions } from '../../shared/enums/player-positions.enum';
import { PlayerPosition } from './models/player-position.model';
import { createId, PlayerPositionId } from '../../shared/types/branded-types';

export const playerPositionsData: ReadonlyArray<PlayerPosition> = [
  new PlayerPosition({
    id: createId<PlayerPositionId>(),
    name: 'Assault Rifle',
    acronym: PlayerPositions.AR,
    metadata: {
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  }),
  new PlayerPosition({
    id: createId<PlayerPositionId>(),
    name: 'Submachine Gun',
    acronym: PlayerPositions.SMG,
    metadata: {
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  }),
];
