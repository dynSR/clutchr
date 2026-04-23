import { MajorEvent } from './models/major-event';
import { createId, MajorEventId } from '../../shared/types/branded-types';
import { Organization } from '../../shared/enums/organization.enum';
import { Metadata } from '../../shared/models/metadata';
import { ASSETS_PLACEHOLDER_LOGO_IMG } from '../../shared/utils/assets-finder';

export const majorEventsData: Array<MajorEvent> = [
  new MajorEvent({
    id: createId<MajorEventId>(),
    name: 'Event Name 01',
    logoSrc: ASSETS_PLACEHOLDER_LOGO_IMG,
    host: Organization.GentleMates,
    location: 'Paris',
    startingOn: new Date(),
    endingOn: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new MajorEvent({
    id: createId<MajorEventId>(),
    name: 'Major IV',
    logoSrc: ASSETS_PLACEHOLDER_LOGO_IMG,
    host: Organization.GentleMates,
    location: 'Paris',
    startingOn: new Date(),
    endingOn: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
