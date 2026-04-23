import { DefaultProps } from '../../../shared/interfaces/default-props';
import { PlayerPositionId } from '../../../shared/types/branded-types';
import { Metadata } from '../../../shared/models/metadata';

interface PlayerPositionProps extends DefaultProps<PlayerPositionId> {
  name: string;
  acronym: string;
}

export class PlayerPosition implements PlayerPositionProps {
  readonly id: PlayerPositionId;
  readonly name: string;
  readonly acronym: string;
  readonly metadata: Metadata;

  constructor(props: Omit<PlayerPositionProps, 'slug'>) {
    this.id = props.id;
    this.name = props.name;
    this.acronym = props.acronym;
    this.metadata = props.metadata;
  }

  get slug(): string {
    return String.Empty;
  }
}
