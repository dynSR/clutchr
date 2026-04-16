import { BaseModel } from '../../../shared/utils/base-model';
import { Metadata } from '../../../shared/models/metadata';
import { Team } from '../../teams/models/team';
import { IWith } from '../../../shared/utils/base-builder';
import { MatchId } from '../../../shared/types/brandedTypes';

interface MatchProps {
  id: MatchId;
  isLive: boolean;
  teams: FixedSizeArray<Team, 2>;
  score: FixedSizeArray<number, 2>;
  date: Date;
  metadata: Metadata;
}

export class Match extends BaseModel<Match> implements MatchProps {
  readonly id: MatchId;
  readonly isLive: boolean;
  readonly teams: FixedSizeArray<Team, 2>;
  readonly score: FixedSizeArray<number, 2>;
  readonly date: Date;
  readonly metadata: Metadata;

  constructor(props: MatchProps) {
    super();
    this.id = props.id;
    this.isLive = props.isLive;
    this.teams = props.teams;
    this.score = props.score;
    this.date = props.date;
    this.metadata = props.metadata;
  }

  protected initBuilder(builder: IWith<Match>): Match {
    const b = builder
      .with('id', this.id)
      .with('isLive', this.isLive)
      .with('teams', this.teams)
      .with('score', this.score)
      .with('date', this.date)
      .with('metadata', this.metadata);

    return new Match(b.build());
  }
}
