import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-scoreboard-item',
  imports: [],
  template: `
    <a href="{{ 'teams/' + team.id }}"
       class="flex flex-row justify-between interactive p-xs rounded"
    >
      <section role="group" class="flex items-center gap-lg">
        <p class="numeric">{{ team.ladderPosition }}</p>
        <section role="group" class="flex items-center gap-sm">
          <img src="{{ team.logoSrc }}" alt="{{ team.name + ' Logo' }}" class="size-[24px]" />
          <p>{{ team.name }}</p>
        </section>
      </section>
      <p class="numeric">{{ team.cdlPoints }}</p>
    </a>
  `,
})
export class TeamScoreboardItemComponent {
  @Input({ required: true }) team!: Team;
}
