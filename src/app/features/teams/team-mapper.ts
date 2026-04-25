import { Mapper } from '../../shared/interfaces/mapper';
import { RawTeam, Team } from './models/team.model';

export const TeamMapper: Mapper<Team, RawTeam> = {
  fromJSON: (raw: RawTeam): Team => new Team(raw),
  toJSON: (team: Team): RawTeam => ({
    id: team.id,
    city: team.city,
    organization: team.organization,
    cdlPoints: team.cdlPoints,
    colors: team.colors,
  }),
};
