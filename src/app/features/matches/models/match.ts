import { Metadata } from '../../../shared/models/metadata';
import { Team } from '../../teams/models/team';
import { MatchId } from '../../../shared/types/branded-types';
import { DefaultProps } from '../../../shared/interfaces/default-props';

interface MatchProps extends DefaultProps<MatchId> {
  teams: FixedSizeArray<Team, 2>;
  score: FixedSizeArray<number, 2>;
  date: Date;
}

export class Match implements MatchProps {
  readonly id: MatchId;
  readonly teams: FixedSizeArray<Team, 2>;
  readonly score: FixedSizeArray<number, 2>;
  readonly date: Date;
  readonly metadata: Metadata;

  constructor(props: Omit<MatchProps, 'slug'>) {
    this.id = props.id;
    this.teams = props.teams;
    this.score = props.score;
    this.date = props.date;
    this.metadata = props.metadata;
  }

  get slug(): string {
    const teamA: Team = this.teams[0];
    const teamB: Team = this.teams[1];
    return `${teamA.name} versus ${teamB.name}`.toKebabLowerCase();
  }

  isLive(): boolean {
    const matchDurationMs = 90 * 60 * 1000;
    const now = new Date().getTime();
    const matchStart = this.date.getTime();
    const matchEnd = matchStart + matchDurationMs;

    return matchStart <= now && now <= matchEnd;
  }
}
