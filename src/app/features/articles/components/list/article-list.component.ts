import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleListItemComponent } from './article-list-item.component';
import { ArticleService } from '../../article.service';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ArticleListItemComponent, CarouselComponent, AsyncPipe],
  template: `
    @if (articles$ | async; as articles) {
      <app-carousel [items]="articles" />

      @for (article of articles; track article.id) {
        <app-article-list-item [article]="article" />
        @if ($index < articles.length - 1) {
          <hr />
        }
      }
    } @else {
      <p>No article found.</p>
    }
  `,
  host: {
    class: 'flex flex-col gap-sm',
  },
})
export class ArticleListComponent {
  protected articles$: Observable<Article[]>;
  private readonly articleService = inject(ArticleService);

  constructor() {
    this.articles$ = this.articleService.getAll();
  }
}
