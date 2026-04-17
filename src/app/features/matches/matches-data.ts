import { Match } from './models/match';
import { Metadata } from '../../shared/models/metadata';
import { teamsData } from '../teams/teams-data';
import { createId } from '../../shared/types/branded-types';

export const matchesData: Array<Match> = [
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    slug: teamsData[0].slug + teamsData[1].slug,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    slug: teamsData[0].slug + teamsData[1].slug,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    slug: teamsData[0].slug + teamsData[1].slug,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    slug: teamsData[0].slug + teamsData[1].slug,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    slug: teamsData[0].slug + teamsData[1].slug,
    teams: [teamsData[0], teamsData[1]],
    score: [0, 0],
    date: new Date(),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  Match.create({
    id: createId(crypto.randomUUID(), 'MatchId'),
    slug: teamsData[0].slug + teamsData[1].slug,
    teams: [teamsData[0], teamsData[1]],
    score: [3, 2],
    date: new Date(),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
