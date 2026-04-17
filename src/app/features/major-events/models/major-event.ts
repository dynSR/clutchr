import { MajorEventId } from '../../../shared/types/branded-types';
import { BaseModel } from '../../../shared/utils/base-model';
import { Metadata } from '../../../shared/models/metadata';
import { IWith } from '../../../shared/utils/base-builder';

interface MajorEventProps {
  id: MajorEventId;
  name: string;
  description?: string;
  logoSrc: string;
  host: string;
  location: string;
  startingOn: Date;
  endingOn: Date;
  metadata: Metadata;
}

export class MajorEvent extends BaseModel<MajorEvent> implements MajorEventProps {
  readonly id: MajorEventId;
  readonly name: string;
  readonly description?: string;
  readonly logoSrc: string;
  readonly host: string;
  readonly location: string;
  readonly startingOn: Date;
  readonly endingOn: Date;
  readonly metadata: Metadata;

  constructor(props: MajorEventProps) {
    super();
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.logoSrc = props.logoSrc;
    this.startingOn = props.startingOn;
    this.endingOn = props.endingOn;
    this.host = props.host;
    this.location = props.location;
    this.metadata = props.metadata;
  }

  getPeriod(): string {
    return `${this.startingOn.toLocaleDateString()} - ${this.endingOn.toLocaleDateString()}`;
  }

  protected override initBuilder(builder: IWith<MajorEvent>): MajorEvent {
    let b = builder
      .with('id', this.id)
      .with('name', this.name)
      .with('logoSrc', this.logoSrc)
      .with('host', this.host)
      .with('location', this.location)
      .with('startingOn', this.startingOn)
      .with('endingOn', this.endingOn)
      .with('metadata', this.metadata);

    if (this.description) {
      b = b.with('description', this.description);
    }

    return new MajorEvent(b.build());
  }
}
