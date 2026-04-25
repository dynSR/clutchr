import { ID } from '../types/branded-types';
import { Metadata } from '../models/metadata';

export interface DefaultProps<TId extends ID> {
  id: TId;
  linkToDetails: string;
  slug: string;
  metadata?: Metadata;

  getClassName(): string;
}
