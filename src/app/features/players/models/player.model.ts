import {PlayerId} from '../../../shared/types/branded-types';
import {PlayerPosition} from '../../player-positions/models/player-position.model';
import {PropertiesOnly} from '../../../shared/types/properties-only';
import {BaseModel, ModelProps} from '../../../shared/utils/base-model';

interface PlayerIdentity {
  name: string;
  birthday: Date;
  overview: string;
}

type PlayerProps = ModelProps<PlayerId> & {
  tag: string;
  identity: PlayerIdentity;
  number: string | number;
  iconSrc: string;
  position: PlayerPosition;
}

export type PlayerJsonProps = Omit<
  PropertiesOnly<PlayerProps>,
  'iconSrc' | 'linkToDetails' | 'slug'
>;

export class Player extends BaseModel<PlayerId> implements PlayerProps {
  readonly tag: string;
  readonly position: PlayerPosition;
  readonly identity: PlayerIdentity;
  readonly number: string | number;

  constructor(props: PlayerJsonProps) {
    super(props);
    this.tag = props.tag;
    this.position = props.position;
    this.identity = props.identity;
    this.number = props.number;
  }

  override get slug(): string {
    return String.Empty;
  }

  override get linkToDetails(): string {
    return `players/${this.id}/${this.slug}`;
  }

  get iconSrc(): string {
    return String.Empty;
  }
}
