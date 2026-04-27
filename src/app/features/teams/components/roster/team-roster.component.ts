import { Component, inject } from '@angular/core';
import { Team } from '../../models/team.model';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../team.service';
import { TeamLogoNameComponent } from '../shared/team-logo-name.component';
import { TextBlockType } from '../../../../shared/enums/text-block-type.enum';
import { createIdFrom, TeamId } from '../../../../shared/types/branded-types';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'team-roster',
  imports: [TeamLogoNameComponent, AsyncPipe],
  template: `
    @if (team$ | async; as team) {
      <header class="flex flex-row justify-between items-center h-[80px] overflow-hidden">
        <team-logo-name
          [team]="team"
          [teamIconSize]="80"
          [teamNameTextBlockType]="TextBlockType.H4"
        />
        <!-- TODO: Socials here -->
        <nav>
          <ul class="flex flex-row gap-sm">
            <li><a href="">⏹</a></li>
            <li><a href="">⏹</a></li>
            <li><a href="">⏹</a></li>
            <li><a href="">⏹</a></li>
          </ul>
        </nav>
      </header>

      <section role="group" class="flex flex-row justify-between items-center">
        <section role="group" class="flex flex-col justify-between items-start w-full">
          <p>Major Record 1-0</p>
          <p class="numeric">#th ({{ team.cdlPoints }} points)</p>
        </section>
        <section role="group" class="flex flex-col justify-between items-end w-full">
          <p>L L L L L W W W W L L</p>
          <a href="">Next match vs. X</a>
        </section>
      </section>
    }
  `,
  host: {
    class: 'flex flex-col gap-md p-lg',
  },
})
export class TeamRosterComponent {
  protected team$: Observable<Team | undefined> = of(undefined);
  protected readonly TextBlockType = TextBlockType;
  private readonly activatedRoute = inject(ActivatedRoute);

  constructor(private readonly teamService: TeamService) {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      const teamId = createIdFrom<TeamId>(idParam);
      console.log(teamId);
      this.team$ = this.teamService.get(teamId);
    }
  }
}
