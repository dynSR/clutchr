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
      <section role="group" aria-label="Team Scoreboard Filters" class="flex flex-row items-center gap-2">
        <button type="button">⏹</button>
        <button type="button">⏹</button>
        <button type="button">⏹</button>
        <button type="button">⏹</button>
      </section>
    </header>
    <article class="flex flex-col gap-xs">
      @for (team of teams; track team.id) {
        <team-scoreboard-item [team]="team" />
        @if ($index < teams.length - 1) {
          <hr />
        }
      }
    </article>
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
