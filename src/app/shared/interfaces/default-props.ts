import { ID } from '../types/branded-types';
import { Metadata } from '../models/metadata';

export interface DefaultProps<TId extends ID> {
  id: TId;
  slug: string;
  metadata: Metadata;
}
