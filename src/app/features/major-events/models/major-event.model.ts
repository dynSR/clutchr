import {MajorEventId} from '../../../shared/types/branded-types';
import {PropertiesOnly} from '../../../shared/types/properties-only';
import {BaseModel, ModelProps} from '../../../shared/utils/base-model';

type MajorEventProps = ModelProps<MajorEventId> & {
  name: string;
  description?: string;
  logoSrc: string;
  host: string;
  location: string;
  startingOn: Date;
  endingOn: Date;
  period: string;
}

export type MajorEventJsonProps = Omit<
  PropertiesOnly<MajorEventProps>,
  'period' | 'linkToDetails' | 'logoSrc' | 'slug'
>

export class MajorEvent extends BaseModel<MajorEventId> implements MajorEventProps {
  readonly name: string;
  readonly description?: string;
  readonly host: string;
  readonly location: string;
  readonly startingOn: Date;
  readonly endingOn: Date;

  constructor(props: MajorEventJsonProps) {
    super(props)
    this.name = props.name;
    this.description = props.description;
    this.startingOn = props.startingOn;
    this.endingOn = props.endingOn;
    this.host = props.host;
    this.location = props.location;
  }

  override get linkToDetails(): string {
    return `major-events/${this.id}/${this.slug}`;
  }

  override get slug(): string {
    return (this.name + ' hosted by ' + this.host + ' in ' + this.location).toKebabLowerCase();
  }

  get logoSrc(): string {
    return String.Empty;
  }

  get period(): string {
    return `${this.startingOn.toLocaleDateString()} - ${this.endingOn.toLocaleDateString()}`;
  }
}
