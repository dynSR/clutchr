import { MajorEvent } from './models/major-event';
import { createId } from '../../shared/types/branded-types';
import { TeamName } from '../teams/enums/team-name';

export const majorEventsData: Array<MajorEvent> = [
  MajorEvent.create({
    id: createId(crypto.randomUUID(), 'MajorEventId'),
    name: 'Event Name 01',
    logoSrc: 'assets/Logo_Placeholder.png',
    host: TeamName.GentleMates,
    location: 'Paris',
    startingOn: new Date(),
    endingOn: new Date(),
  }),
  MajorEvent.create({
    id: createId(crypto.randomUUID(), 'MajorEventId'),
    name: 'Major IV',
    logoSrc: 'assets/Logo_Placeholder.png',
    host: TeamName.GentleMates,
    location: 'Paris',
    startingOn: new Date(),
    endingOn: new Date(),
  }),
];
