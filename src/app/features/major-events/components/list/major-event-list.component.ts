import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MajorEvent } from '../../models/major-event.model';
import { MajorEventListItemComponent } from './major-event-list-item.component';
import { MajorEventService } from '../../major-event.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-major-event-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MajorEventListItemComponent, AsyncPipe],
  template: `
    <header class="h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
    </header>
    @if (majorEvents$ | async; as majorEvents) {
      <ul class="flex flex-col gap-xs">
        @for (majorEvent of majorEvents; track majorEvent.id) {
          <li>
            <app-major-event-list-item [majorEvent]="majorEvent" />
          </li>
          @if ($index < majorEvents.length - 1) {
            <hr />
          }
        }
      </ul>
    } @else {
      <p>No major events found.</p>
    }
  `,
})
export class MajorEventListComponent {
  protected readonly title: string = '2026 CDL Events';
  protected majorEvents$: Observable<MajorEvent[]>;
  private readonly majorEventsService = inject(MajorEventService);

  constructor() {
    this.majorEvents$ = this.majorEventsService.getAll();
  }
}
