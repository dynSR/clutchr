import { Component, Input } from '@angular/core';
import { MajorEvent } from '../../models/major-event';

@Component({
  selector: 'major-events-timeline-item',
  imports: [],
  template: `
    <a
      href="{{ 'events/' + majorEvent.id }}"
      class="flex flex-row items-center gap-md  rounded p-xs interactive"
    >
      <img src="{{ majorEvent.logoSrc }}" alt="Major Event Logo" class="size-[40px]" />
      <section role="group" class="flex flex-col">
        <h6>{{ majorEvent.name }}</h6>
        <small class="numeric">{{ majorEvent.getPeriod() }}</small>
      </section>
    </a>
  `,
})
export class MajorEventTimelineItemComponent {
  @Input({ required: true }) majorEvent!: MajorEvent;
}
