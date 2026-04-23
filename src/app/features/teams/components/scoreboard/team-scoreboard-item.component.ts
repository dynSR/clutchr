import { Component, Input } from '@angular/core';
import { Team } from '../../models/team.model';
import { TeamLogoNameComponent } from '../../../../shared/components/team-logo-name.component';
import { Spacings } from '../../../../shared/enums/spacings.enum';

@Component({
  selector: 'team-scoreboard-item',
  imports: [TeamLogoNameComponent],
  template: `
    <a
      href="{{ team.linkToDetails }}"
      class="flex flex-row justify-between interactive p-xs rounded"
    >
      <section role="group" class="flex items-center gap-lg">
        <p class="numeric">{{ position + 1 }}</p>
        <team-logo-name
          [team]="team"
          [teamIconSize]="24"
          [gapBetweenTeamIconAndName]="Spacings.SM"
        />
      </section>
      <p class="numeric">{{ team.cdlPoints }}</p>
    </a>
  `,
})
export class TeamScoreboardItemComponent {
  @Input({ required: true }) team!: Team;
  @Input({ required: true }) position!: number;
  protected readonly Spacings = Spacings;
}
