import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatchService } from '../../match.service';
import { MatchScheduleItemComponent } from './match-schedule-item.component';
import { Match } from '../../models/match.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-match-schedule',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatchScheduleItemComponent, AsyncPipe],
  template: `
    <header class="flex flex-row items-center justify-between h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
    </header>
    @if (matches$ | async; as matches) {
      <ul class="flex flex-col gap-sm">
        @for (match of matches; track match.id) {
          <li>
            <app-match-schedule-item [match]="match" />
          </li>
          @if ($index < matches.length - 1) {
            <hr />
          }
        }
      </ul>
    } @else {
      <p>No matches found.</p>
    }
  `,
  host: {
    class: 'flex flex-col gap-xs',
  },
})
export class MatchScheduleComponent {
  protected readonly title: string = 'Incoming matches';
  protected matches$: Observable<Match[]>;
  private readonly matchService = inject(MatchService);

  constructor() {
    this.matches$ = this.matchService.getAll();
  }
}
