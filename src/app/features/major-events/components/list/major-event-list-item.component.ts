import { Component, Input } from '@angular/core';
import { MajorEvent } from '../../models/major-event.model';

@Component({
  selector: 'major-event-list-item',
  imports: [],
  template: `
    <a
      href="{{ majorEvent.linkToDetails }}"
      class="flex flex-row items-center gap-md  rounded p-xs interactive"
    >
      <img src="{{ majorEvent.logoSrc }}" alt="Major Event Logo" class="size-[40px]" />
      <section role="group" class="flex flex-col">
        <h6>{{ majorEvent.name }}</h6>
        <small class="numeric">{{ majorEvent.period }}</small>
      </section>
    </a>
  `,
})
export class MajorEventListItemComponent {
  @Input({ required: true }) majorEvent!: MajorEvent;
}
