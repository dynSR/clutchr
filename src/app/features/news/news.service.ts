import { Injectable } from '@angular/core';
import { newsData } from './news-data';
import { News } from './models/news';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly news: Array<News> = newsData;

  getNewsWithLimit(limit: number) {
    return this.getNews().slice(0, limit);
  }

  getNews(): Array<News> {
    return this.news.sort((a, b) => b.publishedOn.getTime() - a.publishedOn.getTime());
  }
}
