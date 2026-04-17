import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { News } from '../../models/news';
import { LinkFlavourTextEnum } from '../../../../shared/enums/link-flavour-text.enum';

@Component({
  selector: 'news-list-item',
  imports: [DatePipe],
  template: `
    <header class="flex flex-col gap-md w-full">
      <!-- News Publication info -->
      <section role="group" class="flex justify-between items-start gap-xs w-full">
        <section role="group" class="flex flex-col">
          <small class="numeric">{{ news.publishedOn | date: 'fullDate' }}</small>
          <a href="" class="underline">
            {{ news.publisher }}
          </a>
        </section>
        <!-- News type badge -->
        <small class="badge bg-neutral-800">{{ news.type }}</small>
      </section>

      <!-- Image wrapper for news illustration -->
      <section
        class="flex justify-center items-center h-[20rem] overflow-hidden rounded bg-neutral-950"
      >
        <img src="{{ news.illustrationSrc }}" alt="{{ news.title }}" />
      </section>
    </header>

    <!-- News Title and summary -->
    <section role="group" class="flex flex-col items-start">
      <h5>{{ news.getFullTitle() }}</h5>
      <p>{{ news.summary }}</p>
    </section>

    <!-- Link to news details -->
    <a href="{{ 'news/' + news.id }}"
       class="link underline"
    >
      {{ LinkFlavourTextEnum.ReadMore }}
    </a>
  `,
  host: {
    class: 'flex flex-col gap-md rounded p-sm bg-neutral-900/5',
  },
})
export class NewsListItemComponent {
  @Input({ required: true }) news!: News;
  protected readonly LinkFlavourTextEnum = LinkFlavourTextEnum;
}
