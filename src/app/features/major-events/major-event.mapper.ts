import {MajorEvent, MajorEventJsonProps} from './models/major-event.model';
import {Mapper} from '../../shared/interfaces/mapper';

export const MajorEventMapper: Mapper<MajorEvent, MajorEventJsonProps> = {
  fromJSON: (props: MajorEventJsonProps): MajorEvent => new MajorEvent(props),
  toJSON: (majorEvent: MajorEvent): MajorEventJsonProps => ({
    id: majorEvent.id,
    name: majorEvent.name,
    description: majorEvent.description,
    host: majorEvent.host,
    location: majorEvent.location,
    startingOn: majorEvent.startingOn,
    endingOn: majorEvent.endingOn,
    metadata: majorEvent.metadata
  }),
};
