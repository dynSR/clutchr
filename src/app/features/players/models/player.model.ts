import { DefaultProps } from '../../../shared/interfaces/default-props';
import { Metadata } from '../../../shared/models/metadata';
import { PlayerId } from '../../../shared/types/branded-types';
import { PlayerIdentity } from './player-identity.model';
import { PlayerPosition } from '../../player-positions/models/player-position.model';
import { PropertiesOnly } from '../../../shared/types/properties-only';

interface PlayerProps extends DefaultProps<PlayerId> {
  tag: string;
  identity: PlayerIdentity;
  number: string | number;
  iconSrc: string;
  position: PlayerPosition;
}

export class Player implements PlayerProps {
  readonly id: PlayerId;
  readonly tag: string;
  readonly position: PlayerPosition;
  readonly identity: PlayerIdentity;
  readonly number: string | number;
  readonly metadata?: Metadata;

  constructor(props: Omit<PropertiesOnly<PlayerProps>, 'iconSrc' | 'linkToDetails' | 'slug'>) {
    this.id = props.id;
    this.tag = props.tag;
    this.position = props.position;
    this.identity = props.identity;
    this.number = props.number;
    this.metadata = props.metadata;
  }

  get iconSrc(): string {
    return String.Empty;
  }

  get slug(): string {
    return String.Empty;
  }

  get linkToDetails(): string {
    return `${this.getClassName()}/${this.id}/${this.slug}`;
  }

  getClassName(): string {
    return Player.name.withoutFirstChar().toLowerCase() + 's';
  }
}
