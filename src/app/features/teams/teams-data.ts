import { Team } from './models/team';
import { createId } from '../../shared/types/branded-types';
import { TeamName } from './enums/team-name';
import { Metadata } from '../../shared/models/metadata';

const ASSETS_TEAM_LOGOS_PATH_PREFIXE: string = 'assets/2026-season/teams-logo/';

export const teamsData: Array<Team> = [
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.BostonBreach,
    name: TeamName.BostonBreach,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Boston-Breach.png',
    ladderPosition: 0,
    cdlPoints: 250,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.RoyalRavens,
    name: TeamName.RoyalRavens,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Carolina-Royal-Ravens.png',
    ladderPosition: 0,
    cdlPoints: 200,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.Cloud9,
    name: TeamName.Cloud9,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Cloud9-New-York.png',
    ladderPosition: 0,
    cdlPoints: 200,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.Faze,
    name: TeamName.Faze,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Faze-Vegas.png',
    ladderPosition: 0,
    cdlPoints: 100,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.G2,
    name: TeamName.G2,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'G2-Minnesota.png',
    ladderPosition: 0,
    cdlPoints: 50,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.Thieves,
    name: TeamName.Thieves,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Los-Angeles-Thieves.png',
    ladderPosition: 0,
    cdlPoints: 150,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.Heretics,
    name: TeamName.Heretics,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Miami-Heretics.png',
    ladderPosition: 0,
    cdlPoints: 150,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.Optic,
    name: TeamName.Optic,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Optic-Texas.png',
    ladderPosition: 0,
    cdlPoints: 150,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.GentleMates,
    name: TeamName.GentleMates,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Paris-Gentle-Mates.png',
    ladderPosition: 0,
    cdlPoints: 150,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.Falcons,
    name: TeamName.Falcons,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Riyadh-Falcons.png',
    ladderPosition: 0,
    cdlPoints: 150,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.KOI,
    name: TeamName.KOI,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Toronto-KOI.png',
    ladderPosition: 0,
    cdlPoints: 150,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    slug: TeamName.Surge,
    name: TeamName.Surge,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Vancouver-Surge.png',
    ladderPosition: 0,
    cdlPoints: 150,
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
