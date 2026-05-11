import { Team } from '../../teams/models/team.model';
import { MatchId } from '../../../shared/types/branded-types';
import { PropertiesOnly } from '../../../shared/types/properties-only';
import { BaseModel, ModelProps } from '../../../shared/utils/base-model';
import { FixedSizeArray } from '../../../shared/types/fixed-size-array';

type MatchProps = ModelProps<MatchId> & {
  teams: FixedSizeArray<Team, 2>;
  score: FixedSizeArray<number, 2>;
  date: Date;
  isLive: boolean;
};

export type MatchJsonProps = Omit<PropertiesOnly<MatchProps>, 'isLive' | 'linkToDetails' | 'slug'>;

export class Match extends BaseModel<MatchId> implements MatchProps {
  readonly teams: FixedSizeArray<Team, 2>;
  readonly score: FixedSizeArray<number, 2>;
  readonly date: Date;

  constructor(props: MatchJsonProps) {
    super(props);
    this.teams = props.teams;
    this.score = props.score;
    this.date = props.date;
  }

  override get linkToDetails(): string {
    return `matches/${this.id}/${this.slug}`;
  }

  override get slug(): string {
    const teamA: Team = this.teams[0];
    const teamB: Team = this.teams[1];
    return `${teamA.name} versus ${teamB.name}`.toKebabLowerCase();
  }

  get isLive(): boolean {
    const matchDurationMs = 90 * 60 * 1000;
    const now = new Date().getTime();
    const matchStart = this.date.getTime();
    const matchEnd = matchStart + matchDurationMs;

    return matchStart <= now && now <= matchEnd;
  }
}
