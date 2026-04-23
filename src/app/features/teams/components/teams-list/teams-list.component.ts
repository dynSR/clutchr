import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Team } from '../../models/team';
import { TeamsListItemComponent } from './teams-list-item.component';

@Component({
  selector: 'teams-list',
  imports: [TeamsListItemComponent],
  template: `
    @for (team of teams; track team.id) {
      <teams-list-item [team]="team" />
    }
  `,
  host: {
    class: 'grid grid-cols-4 gap-xl p-lg',
  },
})
export class TeamsListComponent implements OnInit {
  protected teams: Array<Team> = Array.of();
  private readonly teamService = new TeamsService();

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    console.log(this.teams);
    this.teams.forEach((t) => {
      console.log(`${t.name} primary color`, t.colors.primary.toHex());
      if (t.colors.secondary) console.log(`${t.name} secondary color`, t.colors.secondary.toHex());
      console.log(JSON.stringify(t.metadata.createdAt));
    });
  }
}
