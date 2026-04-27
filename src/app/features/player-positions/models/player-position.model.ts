import {PlayerPositionId} from '../../../shared/types/branded-types';
import {PropertiesOnly} from '../../../shared/types/properties-only';
import {BaseModel, ModelProps} from '../../../shared/utils/base-model';

type PlayerPositionProps = ModelProps<PlayerPositionId> & {
  name: string;
  acronym: string;
}

export type PlayerPositionJsonProps = Omit<
  PropertiesOnly<PlayerPositionProps>,
  'className' | 'linkToDetails' | 'slug'
>;

export class PlayerPosition extends BaseModel<PlayerPositionId> implements PlayerPositionProps {
  readonly name: string;
  readonly acronym: string;

  constructor(props: PlayerPositionJsonProps) {
    super(props);
    this.name = props.name;
    this.acronym = props.acronym;
  }

  override get slug(): string {
    return String.Empty;
  }

  override get linkToDetails(): string {
    return `player-positions/${this.id}/${this.slug}`;
  }
}
