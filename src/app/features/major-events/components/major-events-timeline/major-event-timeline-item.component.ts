import { Component, Input } from '@angular/core';
import { MajorEvent } from '../../models/major-event';

@Component({
  selector: 'major-events-timeline-item',
  imports: [],
  template: `
    <img src="{{ majorEvent.logoSrc }}" alt="Major Event Logo" class="size-[40px]" />
    <section role="group" class="flex flex-col">
      <a href="{{'events/' + majorEvent.id}}">
        <h6>{{ majorEvent.name }}</h6>
      </a>
      <small class="numeric">{{ majorEvent.getPeriod() }}</small>
    </section>
  `,
  host: {
    class: 'flex flex-row items-center gap-md bg-white/1 rounded p-xs',
  },
})
export class MajorEventTimelineItemComponent {
  @Input({ required: true }) majorEvent!: MajorEvent;
}
