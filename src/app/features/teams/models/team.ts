import { TeamId } from '../../../shared/types/branded-types';
import { TeamName } from '../enums/team-name';
import { BaseModel } from '../../../shared/utils/base-model';
import { IWith } from '../../../shared/utils/base-builder';
import { Metadata } from '../../../shared/models/metadata';
import { BaseModelProps } from '../../../shared/interfaces/base-model-props';
import '../../../shared/extensions/string.extensions';

interface TeamProps extends BaseModelProps<TeamId> {
  name: TeamName;
  logoSrc: string;
  ladderPosition: number;
  cdlPoints: number;
}

export class Team extends BaseModel<Team> implements TeamProps {
  readonly id: TeamId;
  readonly name: TeamName;
  readonly logoSrc: string;
  readonly ladderPosition: number;
  readonly cdlPoints: number;
  readonly metadata: Metadata;

  constructor(props: TeamProps) {
    super();
    this.id = props.id;
    this.name = props.name;
    this.logoSrc = props.logoSrc;
    this.ladderPosition = props.ladderPosition;
    this.cdlPoints = props.cdlPoints;
    this.metadata = props.metadata;
  }

  get slug(): string {
    return this.name.toKebabLowerCase();
  }

  protected override initBuilder(builder: IWith<Team>): Team {
    let b = builder
      .with('id', this.id)
      .with('slug', this.slug)
      .with('name', this.name)
      .with('logoSrc', this.logoSrc)
      .with('ladderPosition', this.ladderPosition)
      .with('cdlPoints', this.cdlPoints)
      .with('metadata', this.metadata);

    return new Team(b.build());
  }
}
