import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatchService } from '../../match.service';
import { ScheduleItemComponent } from './schedule-item.component';
import { Match } from '../../models/match.model';

@Component({
  selector: 'schedule',
  imports: [ScheduleItemComponent],
  template: `
    <header class="flex flex-row items-center justify-between h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
    </header>
    <ul class="flex flex-col gap-sm">
      @for (match of matches; track match.id) {
        <li>
          <schedule-item [match]="match" />
        </li>
        @if ($index < matches.length - 1) {
          <hr />
        }
      }
    </ul>
  `,
  host: {
    class: 'flex flex-col gap-xs',
  },
})
export class ScheduleComponent implements OnInit {
  protected readonly title: string = 'Incoming matches';
  protected matches: Array<Match> = Array.of();
  private readonly matchService = new MatchService();

  ngOnInit() {
    this.matches = this.matchService.getIncomingMatches();
    console.log(this.matches);
  }
}
