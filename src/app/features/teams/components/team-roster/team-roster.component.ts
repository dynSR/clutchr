import { Component, inject, OnInit } from '@angular/core';
import { Team } from '../../models/team.model';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../../teams.service';
import { TeamLogoNameComponent } from '../../../../shared/components/team-logo-name.component';
import { TextBlockType } from '../../../../shared/enums/text-block-type.enum';

@Component({
  selector: 'team-roster',
  imports: [TeamLogoNameComponent],
  template: `
    @if (team) {
      <header class="flex flex-row justify-between items-center h-[80px] overflow-hidden">
        <team-logo-name
          [team]="team"
          [teamIconSize]="256"
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

      <section role="group"
               class="flex flex-row justify-between items-center">
        <section role="group"
                 class="flex flex-col justify-between items-start w-full">
          <p>Major Record 1-0</p>
          <p class="numeric">#th ({{ team.cdlPoints }} points)</p>
        </section>
        <section role="group"
                 class="flex flex-col justify-between items-end w-full">
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
export class TeamRosterComponent implements OnInit {
  protected team?: Team;
  protected readonly TextBlockType = TextBlockType;
  private readonly teamService = new TeamsService();
  private readonly activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    console.log(this.activatedRoute);
    this.team = this.teamService.getTeams().at(0);
    // const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    // if (idParam) {
    //   const teamId = createFrom<TeamId>(idParam);
    //   console.log(teamId);
    //   this.team = this.teamService.getTeamById(teamId);
    //   console.log(this.team);
    // }
  }
}
