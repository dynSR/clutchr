import { Component } from '@angular/core';
import { TeamScoreboardItemComponent } from './team-scoreboard-item.component';
import { TeamService } from '../../team.service';
import { Team } from '../../models/team.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'team-scoreboard',
  imports: [TeamScoreboardItemComponent, AsyncPipe],
  template: `
    <header class="flex flex-row items-center justify-between h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
      <ul
        role="group"
        aria-label="Team Scoreboard Filters"
        class="flex flex-row items-center gap-2"
      >
        <li>
          <button type="button">⏹</button>
        </li>
        <li>
          <button type="button">⏹</button>
        </li>
        <li>
          <button type="button">⏹</button>
        </li>
        <li>
          <button type="button">⏹</button>
        </li>
      </ul>
    </header>

    @if (teams$ | async; as teams) {
      <ul class="flex flex-col gap-xs">
        @for (team of teams; track team.id) {
          <li>
            <team-scoreboard-item [team]="team" [position]="$index" />
          </li>
          @if ($index < teams.length - 1) {
            <hr />
          }
        }
      </ul>
    }
  `,
  host: {
    class: 'flex flex-col gap-xs',
  },
})
export class TeamScoreboardComponent {
  protected readonly title: string = 'Standings';
  protected teams$: Observable<Array<Team>>;

  constructor(private readonly teamService: TeamService) {
    this.teams$ = this.teamService.getAll();
  }
}
