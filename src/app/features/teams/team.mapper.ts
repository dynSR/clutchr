import {Mapper} from '../../shared/interfaces/mapper';
import {Team, TeamJsonProps} from './models/team.model';

export const TeamMapper: Mapper<Team, TeamJsonProps> = {
  fromJSON: (props: TeamJsonProps): Team => new Team(props),
  toJSON: (team: Team): TeamJsonProps => ({
    id: team.id,
    city: team.city,
    organization: team.organization,
    cdlPoints: team.cdlPoints,
    colors: team.colors,
    metadata: team.metadata
  }),
};
