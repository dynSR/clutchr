import { Team } from './models/team.model';
import { createId, TeamId } from '../../shared/types/branded-types';
import { Metadata } from '../../shared/models/metadata';
import { City } from '../../shared/enums/city.enum';
import { Organization } from '../../shared/enums/organization.enum';
import { Color } from '../../shared/utils/color';

export const teamsData: Array<Team> = [
  new Team({
    id: createId<TeamId>(),
    city: City.Boston,
    organization: Organization.BostonBreach,
    cdlPoints: 250,
    colors: {
      primary: new Color(3, 255, 91),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Carolina,
    organization: Organization.RoyalRavens,
    cdlPoints: 200,
    colors: {
      primary: new Color(0, 131, 193),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.NewYork,
    organization: Organization.Cloud9,
    cdlPoints: 200,
    colors: {
      primary: new Color(0, 174, 239),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Vegas,
    organization: Organization.Faze,
    cdlPoints: 100,
    colors: {
      primary: new Color(255, 0, 255),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Minnesota,
    organization: Organization.G2,
    cdlPoints: 50,
    colors: {
      primary: new Color(53, 31, 101),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.LosAngeles,
    organization: Organization.Thieves,
    cdlPoints: 150,
    colors: {
      primary: new Color(237, 34, 36),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Miami,
    organization: Organization.Heretics,
    cdlPoints: 150,
    colors: {
      primary: new Color(33, 109, 107),
      secondary: new Color(255, 109, 23),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Texas,
    organization: Organization.Optic,
    cdlPoints: 150,
    colors: {
      primary: new Color(146, 201, 81),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Paris,
    organization: Organization.GentleMates,
    cdlPoints: 150,
    colors: {
      primary: new Color(237, 137, 229),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Riyadh,
    organization: Organization.Falcons,
    cdlPoints: 150,
    colors: {
      primary: new Color(25, 206, 132),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Toronto,
    organization: Organization.KOI,
    cdlPoints: 150,
    colors: {
      primary: new Color(120, 44, 242),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Team({
    id: createId<TeamId>(),
    city: City.Vancouver,
    organization: Organization.Surge,
    cdlPoints: 150,
    colors: {
      primary: new Color(3, 255, 206),
    },
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
