import { Team } from './models/team';
import { createId } from '../../shared/types/branded-types';
import { TeamName } from './enums/team-name';

const ASSETS_TEAM_LOGOS_PATH_PREFIXE: string = 'assets/2026-season/teams-logo/';

export const teamsData: Array<Team> = [
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.BostonBreach,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Boston-Breach.png',
    ladderPosition: 0,
    cdlPoints: 250,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.RoyalRavens,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Carolina-Royal-Ravens.png',
    ladderPosition: 0,
    cdlPoints: 200,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.Cloud9,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Cloud9-New-York.png',
    ladderPosition: 0,
    cdlPoints: 200,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.Faze,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Faze-Vegas.png',
    ladderPosition: 0,
    cdlPoints: 100,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.G2,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'G2-Minnesota.png',
    ladderPosition: 0,
    cdlPoints: 50,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.Thieves,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Los-Angeles-Thieves.png',
    ladderPosition: 0,
    cdlPoints: 150,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.Heretics,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Miami-Heretics.png',
    ladderPosition: 0,
    cdlPoints: 150,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.Optic,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Optic-Texas.png',
    ladderPosition: 0,
    cdlPoints: 150,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.GentleMates,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Paris-Gentle-Mates.png',
    ladderPosition: 0,
    cdlPoints: 150,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.Falcons,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Riyadh-Falcons.png',
    ladderPosition: 0,
    cdlPoints: 150,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.KOI,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Toronto-KOI.png',
    ladderPosition: 0,
    cdlPoints: 150,
  }),
  Team.create({
    id: createId(crypto.randomUUID(), 'TeamId'),
    name: TeamName.Surge,
    logoSrc: ASSETS_TEAM_LOGOS_PATH_PREFIXE + 'Vancouver-Surge.png',
    ladderPosition: 0,
    cdlPoints: 150,
  }),
];
