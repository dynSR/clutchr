import { MajorEventId } from '../../../shared/types/branded-types';
import { IWith } from '../../../shared/utils/base-builder';
import { BaseModel } from '../../../shared/utils/base-model';

interface IMajorEvent {
  id: MajorEventId;
  name: string;
  description?: string;
  logoSrc: string;
  host: string;
  location: string;
  startingOn: Date;
  endingOn: Date;
}

export class MajorEvent extends BaseModel<MajorEvent> implements IMajorEvent {
  readonly id: MajorEventId;
  readonly name: string;
  readonly description?: string;
  readonly logoSrc: string;
  readonly host: string;
  readonly location: string;
  readonly startingOn: Date;
  readonly endingOn: Date;

  constructor(data: IMajorEvent) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.logoSrc = data.logoSrc;
    this.startingOn = data.startingOn;
    this.endingOn = data.endingOn;
    this.host = data.host;
    this.location = data.location;
  }

  getPeriod(): string {
    return `${this.startingOn.toLocaleDateString()} - ${this.endingOn.toLocaleDateString()}`;
  }

  protected override initBuilder(builder: IWith<MajorEvent, {}>): MajorEvent {
    let b = builder
      .with('id', this.id)
      .with('name', this.name)
      .with('logoSrc', this.logoSrc)
      .with('host', this.host)
      .with('location', this.location)
      .with('startingOn', this.startingOn)
      .with('endingOn', this.endingOn);

    if (this.description) {
      b = b.with('description', this.description);
    }

    return new MajorEvent(b.build());
  }
}
