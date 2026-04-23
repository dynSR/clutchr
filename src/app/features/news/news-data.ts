import { News, NewsType } from './models/news';
import { createId, NewsId } from '../../shared/types/branded-types';
import { Metadata } from '../../shared/models/metadata';
import { ASSETS_PLACEHOLDER_LOGO_IMG, assets } from '../../shared/utils/assets-finder';

export const newsData: Array<News> = [
  new News({
    id: createId<NewsId>(),
    type: NewsType.RosterUpdate,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/BB-Nastie'),
    publisher: '@' + 'Publisher',
    publishedOn: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new News({
    id: createId<NewsId>(),
    type: NewsType.Update,
    title: 'BIG NEWS',
    subtitle: 'This News Title big big news',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/FV-Abuzah'),
    publisher: '@' + 'Publisher',
    publishedOn: new Date(2026, 3, 15, 15, 30),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new News({
    id: createId<NewsId>(),
    type: NewsType.Schedule,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/PGM-Sib'),
    publisher: '@' + 'Publisher',
    publishedOn: new Date(2026, 2, 15, 15, 30),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new News({
    id: createId<NewsId>(),
    type: NewsType.Schedule,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/PGM-Envoy'),
    publisher: '@' + 'Publisher',
    publishedOn: new Date(2026, 3, 15, 17, 1),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new News({
    id: createId<NewsId>(),
    type: NewsType.Results,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/PGM-Neptune'),
    publisher: '@' + 'Publisher',
    publishedOn: new Date('2025-08-02'),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new News({
    id: createId<NewsId>(),
    type: NewsType.Results,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: ASSETS_PLACEHOLDER_LOGO_IMG,
    publisher: '@' + 'Publisher',
    publishedOn: new Date('2023-07-05'),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
