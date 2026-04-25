import { MajorEventId } from '../../../shared/types/branded-types';
import { Metadata } from '../../../shared/models/metadata';
import { DefaultProps } from '../../../shared/interfaces/default-props';
import { PropertiesOnly } from '../../../shared/types/properties-only';

interface MajorEventProps extends DefaultProps<MajorEventId> {
  name: string;
  description?: string;
  logoSrc: string;
  host: string;
  location: string;
  startingOn: Date;
  endingOn: Date;
  period: string;
}

export class MajorEvent implements MajorEventProps {
  readonly id: MajorEventId;
  readonly name: string;
  readonly description?: string;
  readonly logoSrc: string;
  readonly host: string;
  readonly location: string;
  readonly startingOn: Date;
  readonly endingOn: Date;
  readonly metadata?: Metadata;

  constructor(props: Omit<PropertiesOnly<MajorEventProps>, 'period' | 'linkToDetails' | 'slug'>) {
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

  get slug(): string {
    return (this.name + ' hosted by ' + this.host + ' in ' + this.location).toKebabLowerCase();
  }

  get linkToDetails(): string {
    return `${this.getClassName()}/${this.id}/${this.slug}`;
  }

  get period(): string {
    return `${this.startingOn.toLocaleDateString()} - ${this.endingOn.toLocaleDateString()}`;
  }

  getClassName(): string {
    return MajorEvent.name.withoutFirstChar().splitOnCaps().toString().toKebabLowerCase() + 's';
  }
}
