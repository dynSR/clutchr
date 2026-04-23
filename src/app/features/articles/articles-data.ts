import { Article, ArticleType } from './models/article.model';
import { createId, ArticleId } from '../../shared/types/branded-types';
import { Metadata } from '../../shared/models/metadata';
import { ASSETS_PLACEHOLDER_LOGO_IMG, assets } from '../../shared/utils/assets-finder';

export const articlesData: Array<Article> = [
  new Article({
    id: createId<ArticleId>(),
    type: ArticleType.RosterUpdate,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/BB-Nastie'),
    author: '@' + 'Publisher',
    publishedOn: new Date(),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Article({
    id: createId<ArticleId>(),
    type: ArticleType.Update,
    title: 'BIG NEWS',
    subtitle: 'This News Title big big news',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/FV-Abuzah'),
    author: '@' + 'Publisher',
    publishedOn: new Date(2026, 3, 15, 15, 30),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Article({
    id: createId<ArticleId>(),
    type: ArticleType.Schedule,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/PGM-Sib'),
    author: '@' + 'Publisher',
    publishedOn: new Date(2026, 2, 15, 15, 30),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Article({
    id: createId<ArticleId>(),
    type: ArticleType.Schedule,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/PGM-Envoy'),
    author: '@' + 'Publisher',
    publishedOn: new Date(2026, 3, 15, 17, 1),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Article({
    id: createId<ArticleId>(),
    type: ArticleType.Results,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: assets('2026-season/players/PGM-Neptune'),
    author: '@' + 'Publisher',
    publishedOn: new Date('2025-08-02'),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
  new Article({
    id: createId<ArticleId>(),
    type: ArticleType.Results,
    title: 'News Title',
    content: 'News Content',
    summary: 'News Summary',
    illustrationSrc: ASSETS_PLACEHOLDER_LOGO_IMG,
    author: '@' + 'Publisher',
    publishedOn: new Date('2023-07-05'),
    metadata: new Metadata({
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  }),
];
