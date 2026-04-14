import { TeamId } from '../../../shared/types/branded-types';
import { TeamName } from '../enums/team-name';
import { BaseModel } from '../../../shared/utils/base-model';
import { IWith } from '../../../shared/utils/base-builder';

interface ITeam {
  id: TeamId;
  name: TeamName;
  logoSrc: string;
  ladderPosition: number;
  cdlPoints: number;
}

export class Team extends BaseModel<Team> implements ITeam {
  readonly id: TeamId;
  readonly name: TeamName;
  readonly logoSrc: string;
  readonly ladderPosition: number;
  readonly cdlPoints: number;

  public constructor(data: ITeam) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.logoSrc = data.logoSrc;
    this.ladderPosition = data.ladderPosition;
    this.cdlPoints = data.cdlPoints;
  }

  protected override initBuilder(builder: IWith<Team, {}>): Team {
    let b = builder
      .with('id', this.id)
      .with('name', this.name)
      .with('logoSrc', this.logoSrc)
      .with('ladderPosition', this.ladderPosition)
      .with('cdlPoints', this.cdlPoints);

    return new Team(b.build());
  }
}
