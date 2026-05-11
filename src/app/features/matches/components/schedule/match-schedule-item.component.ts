import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Match } from '../../models/match.model';
import { DatePipe } from '@angular/common';
import { TeamLogoNameComponent } from '../../../teams/components/team-logo-name/team-logo-name.component';
import { Spacings } from '../../../../shared/enums/spacings.enum';

@Component({
  selector: 'app-match-schedule-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, TeamLogoNameComponent],
  template: `
    <a
      href="{{ match.linkToDetails }}"
      class="flex flex-col gap-sm interactive p-sm rounded relative"
    >
      <header class="flex flex-row justify-between items-center">
        <small class="numeric">
          {{ match.date | date: 'short' }}
        </small>
        <span
          [class]="
            match.isLive
              ? 'pulsating-circle bg-green-300 before:bg-green-300/20'
              : 'circle bg-red-500'
          "
        ></span>
      </header>

      <section role="group" class="flex flex-col items-start">
        @for (team of match.teams; track team.id) {
          <section role="group" class="flex flex-row justify-between w-full">
            <app-team-logo-name
              [team]="team"
              [teamIconSize]="24"
              [gapBetweenTeamIconAndName]="Spacings.SM"
            />
            <p class="numeric">{{ match.score[$index] }}</p>
          </section>
        }
      </section>
    </a>
  `,
})
export class MatchScheduleItemComponent {
  @Input({ required: true }) match!: Match;
  protected readonly Spacings = Spacings;
}
