import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { News } from '../../models/news';

@Component({
  selector: 'news-list-item',
  imports: [DatePipe],
  template: `
    <header class="flex flex-col gap-xs">
      <section role="group" class="flex flex-row items-center gap-sm">
        <img src="{{'assets/Logo_Placeholder.png'}}"
             alt="{{news.type}}"
             class="size-[32px]"
        >
        <a href="{{'news/' + news.id}}">
          <h5>{{ news.title }}</h5>
        </a>
      </section>

      @if (news.subtitle) {
        <span class="italic">{{ news.subtitle }}</span>
      }
    </header>

    <small class="numeric">{{ news.publishedOn | date: 'short' }}</small>
  `,
  host: {
    class: 'flex flex-row justify-between items-start gap-md bg-white/1 p-md rounded'
  }
})
export class NewsListItemComponent {
  @Input({ required: true }) news!: News;
}
