import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Article} from '../../models/article.model';
import {ArticleListItemComponent} from './article-list-item.component';
import {ArticleService} from '../../article.service';
import {CarouselComponent} from '../../../../shared/components/carousel/carousel.component';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'article-list',
  imports: [ArticleListItemComponent, CarouselComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (articles$ | async; as articles) {
      <carousel [items]="articles"/>

      @for (article of articles; track article.id) {
        <article-list-item [article]="article"/>
        @if ($index < articles.length - 1) {
          <hr/>
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
  protected articles$: Observable<Array<Article>>;

  constructor(private readonly articleService: ArticleService) {
    this.articles$ = this.articleService.getAll();
  }
}
