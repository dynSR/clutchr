import {Component, Input} from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-scoreboard-item',
  imports: [],
  template: `
    <section role="group" class="flex justify-items-start gap-lg">
      <p class="numeric">{{ team.ladderPosition }}</p>
      <a href="{{'teams/' + team.id}}" class="flex flex-row gap-sm">
        <img src="{{team.logoSrc}}" alt="{{team.name + ' Logo'}}" class="size-[24px]">
        <p>{{ team.name }}</p>
      </a>
    </section>
    <p class="numeric">{{ team.cdlPoints }}</p>
  `,
  host: {
    class: 'flex flex-row justify-between items-center'
  }
})
export class TeamScoreboardItemComponent {
  @Input({required: true}) team!: Team;
}
