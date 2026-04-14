import { Injectable } from '@angular/core';
import { newsData } from './news-data';
import { News } from './models/news';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly news: Array<News> = newsData;

  getNews(): Array<News> {
    return this.news.sort((a, b) => a.publishedOn.getTime() - b.publishedOn.getTime());
  }

  getLatestNews() {
    return this.getNews().slice(0, 5);
  }
}
