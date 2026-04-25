import { Component, OnInit } from '@angular/core';
import { MajorEvent } from '../../models/major-event.model';
import { MajorEventListItemComponent } from './major-event-list-item.component';
import { MajorEventService } from '../../major-event.service';

@Component({
  selector: 'major-event-list',
  imports: [MajorEventListItemComponent],
  template: `
    <header class="h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
    </header>
    <ul class="flex flex-col gap-xs">
      @for (majorEvent of majorEvents; track majorEvent.id) {
        <li>
          <major-event-list-item [majorEvent]="majorEvent" />
        </li>
        @if ($index < majorEvents.length - 1) {
          <hr>
        }
      }
    </ul>
  `,
})
export class MajorEventListComponent implements OnInit {
  protected readonly title: string = '2026 CDL Events';
  protected majorEvents: Array<MajorEvent> = Array.of();

  private readonly majorEventsService: MajorEventService = new MajorEventService();

  ngOnInit(): void {
    this.majorEvents = this.majorEventsService.getMajorEvents();
  }
}
