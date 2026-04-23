import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleListItemComponent } from './article-list-item.component';
import { ArticleService } from '../../article.service';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'article-list',
  imports: [ArticleListItemComponent, CarouselComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <carousel [items]="latestArticles" />

    @for (article of articles; track article.id) {
      <article-list-item [article]="article" />
      @if ($index < articles.length - 1) {
        <hr />
      }
    }
  `,
  host: {
    class: 'flex flex-col gap-sm',
  },
})
export class ArticleListComponent implements OnInit {
  protected articles: Array<Article> = Array.of();
  protected latestArticles: Array<Article> = Array.of();
  private readonly articleService = new ArticleService();

  ngOnInit(): void {
    this.articles = this.articleService.getNews();
    this.latestArticles = this.articleService.getNewsWithLimit(5);
  }
}
