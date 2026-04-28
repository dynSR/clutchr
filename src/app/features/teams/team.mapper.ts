import { Mapper } from '../../shared/interfaces/mapper';
import { Team } from './models/team.model';
import { TeamRaw } from './types/team.types';

export const TeamMapper: Mapper<Team, TeamRaw> = {
  fromJSON: (props: TeamRaw): Team => new Team(props),
  toJSON: (team: Team): TeamRaw => ({
    id: team.id,
    city: team.city,
    organization: team.organization,
    cdlPoints: team.cdlPoints,
    colors: team.colors,
    metadata: team.metadata,
  }),
};
