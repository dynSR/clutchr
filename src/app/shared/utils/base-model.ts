import {ID} from '../types/branded-types';
import {Metadata} from '../models/metadata';

interface DefaultProps<TId extends ID> {
  id: TId;
  linkToDetails: string;
  slug: string;
  metadata?: Metadata;
}

export type ModelProps<TId extends ID> = Omit<
  DefaultProps<TId>,
  'className' | 'linkToDetails' | 'slug'
>;

export abstract class BaseModel<TId extends ID> implements DefaultProps<TId> {
  readonly id: TId;
  readonly metadata?: Metadata;

  protected constructor(props: ModelProps<TId>) {
    this.id = props.id;
    this.metadata = props.metadata;
  }

  abstract get linkToDetails(): string;

  abstract get slug(): string;
}
