import {Component} from '@angular/core';
import {MatchService} from '../../match.service';
import {ScheduleItemComponent} from './schedule-item.component';
import {Match} from '../../models/match.model';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'schedule',
  imports: [ScheduleItemComponent, AsyncPipe],
  template: `
    <header class="flex flex-row items-center justify-between h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
    </header>
    @if (matches$ | async; as matches) {
      <ul class="flex flex-col gap-sm">
        @for (match of matches; track match.id) {
          <li>
            <schedule-item [match]="match"/>
          </li>
          @if ($index < matches.length - 1) {
            <hr/>
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
export class ScheduleComponent {
  protected readonly title: string = 'Incoming matches';
  protected matches$: Observable<Array<Match>>;

  constructor(private readonly matchService: MatchService) {
    this.matches$ = this.matchService.getAll();
  }
}
