import { Component, Input } from '@angular/core';
import { Match } from '../../models/match';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'schedule-item',
  imports: [DatePipe],
  template: `
    <a href="{{ 'matches/' + match.id }}"
       class="flex flex-col gap-sm interactive p-sm rounded relative"
    >
      <header class="flex flex-row justify-between items-center">
        <small class="numeric">
          {{ match.date | date: 'short' }}
        </small>
        <span [class]="match.isLive() ?
              'pulsating-circle bg-green-300 before:bg-green-300/20' :
              'circle bg-red-500'"
        ></span>
      </header>

      <section role="group" class="flex flex-col items-start">
        @for (team of match.teams; track team.id) {
          <section role="group" class="flex flex-row justify-between w-full">
            <section role="group" class="flex flex-row gap-sm">
              <img src="{{ team.logoSrc }}" alt="{{ team.name + ' Logo' }}" class="size-[24px]" />
              <p>{{ team.name }}</p>
            </section>
            <p class="numeric">{{ match.score[$index] }}</p>
          </section>
        }
      </section>
    </a>
  `,
})
export class ScheduleItemComponent {
  @Input({ required: true }) match!: Match;
}
