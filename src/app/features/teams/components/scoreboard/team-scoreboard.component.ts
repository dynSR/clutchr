import { Component, OnInit } from '@angular/core';
import { TeamScoreboardItemComponent } from './team-scoreboard-item.component';
import { TeamsService } from '../../teams.service';
import { Team } from '../../models/team';

@Component({
  selector: 'team-scoreboard',
  imports: [TeamScoreboardItemComponent],
  template: `
    <header class="flex flex-row items-center justify-between h-[40px]">
      <h5 class="uppercase">{{ title }}</h5>
      <ul role="group" aria-label="Team Scoreboard Filters" class="flex flex-row items-center gap-2">
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
  `,
  host: {
    class: 'flex flex-col gap-xs'
  }
})
export class TeamScoreboardComponent implements OnInit {
  protected readonly title: string = 'Standings';
  protected teams: Array<Team> = Array.of();
  private readonly teamsService = new TeamsService();

  ngOnInit(): void {
    this.teams = this.teamsService.getTeams();
  }
}
