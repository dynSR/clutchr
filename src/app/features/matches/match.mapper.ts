import {Mapper} from '../../shared/interfaces/mapper';
import {Match, MatchJsonProps} from './models/match.model';

export const MatchMapper: Mapper<Match, MatchJsonProps> = {
  fromJSON: (props: MatchJsonProps): Match => new Match(props),
  toJSON: (match: Match): MatchJsonProps => ({
    id: match.id,
    teams: match.teams,
    score: match.score,
    date: match.date,
    metadata: match.metadata
  }),
};
