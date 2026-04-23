import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Article } from '../../models/article.model';
import { LinkFlavourText } from '../../../../shared/enums/link-flavour-text.enum';

@Component({
  selector: 'article-list-item',
  imports: [DatePipe],
  template: `
    <header class="flex flex-col gap-md w-full">
      <!-- Publication info -->
      <section role="group" class="flex justify-between items-center gap-xs w-full">
        <section role="group" class="flex flex-col">
          <small class="numeric">{{ article.publishedOn | date: 'fullDate' }}</small>
          <a href="" class="underline pointer-events-auto">
            {{ article.author }}
          </a>
        </section>
        <!-- Type badge -->
        <small class="badge bg-neutral-800">{{ article.type }}</small>
      </section>

      <!-- Image wrapper for news illustration -->
      <section
        class="flex justify-center items-center h-[20rem] overflow-hidden rounded bg-neutral-950"
      >
        <img src="{{ article.illustrationSrc }}" alt="{{ article.title }}" />
      </section>
    </header>

    <!-- Title and summary -->
    <section role="group" class="flex flex-col items-start">
      <h5>{{ article.getFullTitle() }}</h5>
      <p>{{ article.summary }}</p>
    </section>

    <!-- Link to details -->
    <a href="{{ 'news/' + article.id + '/' + article.slug }}" class="link underline pointer-events-auto">
      {{ LinkFlavourTextEnum.ReadMore }}
    </a>
  `,
  host: {
    class:
      'flex flex-col gap-md rounded p-md bg-neutral-900/20 pointer-events-none ' +
      'hover:bg-primary-50/10',
  },
})
export class ArticleListItemComponent {
  @Input({ required: true }) article!: Article;
  protected readonly LinkFlavourTextEnum = LinkFlavourText;
}
