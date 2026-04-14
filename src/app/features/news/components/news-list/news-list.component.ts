import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { NewsListItemComponent } from './news-list-item.component';
import { NewsService } from '../../news.service';

@Component({
  selector: 'news-list',
  imports: [NewsListItemComponent],
  template: `
    @for (news of newsCollection; track news.id) {
      <news-list-item [news]="news" />
      @if ($index < newsCollection.length - 1) {
        <hr />
      }
    }
  `,
  host: {
    class: 'flex flex-col gap-sm',
  },
})
export class NewsListComponent implements OnInit {
  protected newsCollection: Array<News> = Array.of();
  private readonly newsService = new NewsService();

  ngOnInit(): void {
    this.newsCollection = this.newsService.getNews();
  }
}
