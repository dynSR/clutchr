import { News, NewsType } from './models/news';
import { createId } from '../../shared/types/brandedTypes';
import { Metadata } from '../../shared/models/metadata';

export const newsData: Array<News> = [
  News.create({
    id: createId(crypto.randomUUID(), 'NewsId'),
    type: NewsType.RosterUpdate,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: 'assets/2026-season/players/BB-Nastie.png',
    publisher: '@' + 'Publisher',
    publishedOn: new Date(),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  News.create({
    id: createId(crypto.randomUUID(), 'NewsId'),
    type: NewsType.Update,
    title: 'BIG NEWS',
    subtitle: 'This News Title big big news',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: 'assets/2026-season/players/FV-Abuzah.png',
    publisher: '@' + 'Publisher',
    publishedOn: new Date(2026, 3, 15, 15, 30),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  News.create({
    id: createId(crypto.randomUUID(), 'NewsId'),
    type: NewsType.Schedule,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: 'assets/2026-season/players/PGM-Sib.png',
    publisher: '@' + 'Publisher',
    publishedOn: new Date(2026, 2, 15, 15, 30),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  News.create({
    id: createId(crypto.randomUUID(), 'NewsId'),
    type: NewsType.Schedule,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: 'assets/2026-season/players/PGM-Envoy.png',
    publisher: '@' + 'Publisher',
    publishedOn: new Date(2026, 3, 15, 17, 1),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  News.create({
    id: createId(crypto.randomUUID(), 'NewsId'),
    type: NewsType.Results,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: 'assets/2026-season/players/PGM-Neptune.png',
    publisher: '@' + 'Publisher',
    publishedOn: new Date('2025-08-02'),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  News.create({
    id: createId(crypto.randomUUID(), 'NewsId'),
    type: NewsType.Results,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: 'assets/Logo_Placeholder.png',
    publisher: '@' + 'Publisher',
    publishedOn: new Date('2023-07-05'),
    metadata: Metadata.create({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
