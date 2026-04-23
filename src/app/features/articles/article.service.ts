import { Injectable } from '@angular/core';
import { articlesData } from './articles-data';
import { Article } from './models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private readonly news: Array<Article> = articlesData;

  getNewsWithLimit(limit: number) {
    return this.getNews().slice(0, limit);
  }

  getNews(): Array<Article> {
    return this.news.sort((a, b) => b.publishedOn.getTime() - a.publishedOn.getTime());
  }
}
