import { DefaultProps } from '../../../shared/interfaces/default-props';
import { PlayerPositionId } from '../../../shared/types/branded-types';
import { Metadata } from '../../../shared/models/metadata';
import { PropertiesOnly } from '../../../shared/types/properties-only';

interface PlayerPositionProps extends DefaultProps<PlayerPositionId> {
  name: string;
  acronym: string;
}

export class PlayerPosition implements PlayerPositionProps {
  readonly id: PlayerPositionId;
  readonly name: string;
  readonly acronym: string;
  readonly metadata?: Metadata;

  constructor(props: Omit<PropertiesOnly<PlayerPositionProps>, 'linkToDetails' | 'slug'>) {
    this.id = props.id;
    this.name = props.name;
    this.acronym = props.acronym;
    this.metadata = props.metadata;
  }

  get slug(): string {
    return String.Empty;
  }

  get linkToDetails(): string {
    return `${this.getClassName()}/${this.id}/${this.slug}`;
  }

  getClassName(): string {
    return PlayerPosition.name.withoutFirstChar().toLowerCase() + 's';
  }
}
