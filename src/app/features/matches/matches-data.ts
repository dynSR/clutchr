import { Match } from './models/match';
import { Metadata } from '../../shared/models/metadata';
import { teamsData } from '../teams/teams-data';
import { createId, MatchId } from '../../shared/types/branded-types';

export const matchesData: Array<Match> = [
  new Match({
    id: createId<MatchId>(),
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Match({
    id: createId<MatchId>(),
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Match({
    id: createId<MatchId>(),
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Match({
    id: createId<MatchId>(),
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Match({
    id: createId<MatchId>(),
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Match({
    id: createId<MatchId>(),
    teams: [teamsData[0], teamsData[1]],
    score: [3, 2],
    date: new Date(2026, 3, 14, 20, 30),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
