import { Component, OnInit } from '@angular/core';
import { MajorEvent } from '../../models/major-event.model';
import { MajorEventsTimelineItemComponent } from './major-events-timeline-item.component';
import { MajorEventService } from '../../major-event.service';

@Component({
  selector: 'major-events-timeline',
  imports: [MajorEventsTimelineItemComponent],
  template: `
    <header class="h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
    </header>
    <ul class="flex flex-col gap-xs">
      @for (majorEvent of majorEvents; track majorEvent.id) {
        <li>
          <major-events-timeline-item [majorEvent]="majorEvent" />
        </li>
        @if ($index < majorEvents.length - 1) {
          <hr>
        }
      }
    </ul>
  `,
})
export class MajorEventsTimelineComponent implements OnInit {
  protected readonly title: string = '2026 CDL Events';
  protected majorEvents: Array<MajorEvent> = Array.of();

  private readonly majorEventsService: MajorEventService = new MajorEventService();

  ngOnInit(): void {
    this.majorEvents = this.majorEventsService.getMajorEvents();
  }
}
