import { Component, OnInit } from '@angular/core';
import { MajorEvent } from '../../models/major-event';
import { MajorEventTimelineItemComponent } from './major-event-timeline-item.component';
import { MajorEventsService } from '../../major-events.service';

@Component({
  selector: 'major-events-timeline',
  imports: [MajorEventTimelineItemComponent],
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

  private readonly majorEventsService: MajorEventsService = new MajorEventsService();

  ngOnInit(): void {
    this.majorEvents = this.majorEventsService.getMajorEvents();
  }
}
