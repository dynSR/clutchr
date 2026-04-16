import { Match } from './models/match';
import { Metadata } from '../../shared/models/metadata';
import { teamsData } from '../teams/teams-data';
import { createId } from '../../shared/types/brandedTypes';

export const matchesData: Array<Match> = [
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    isLive: false,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(2026, 3, 16, 20, 30),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    isLive: true,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(2026, 3, 16, 15, 30),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    isLive: false,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(2026, 3, 16, 16),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    isLive: false,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(2026, 3, 16, 17, 30),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    isLive: false,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(2026, 3, 17, 15, 30),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    isLive: false,
    teams: [teamsData[0], teamsData[1]],
    score: [3, 2],
    date: new Date(2026, 3, 12, 14, 30),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
