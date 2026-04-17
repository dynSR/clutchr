import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../teams.service';
import { Team } from '../../models/team';

@Component({
  selector: 'teams-list',
  imports: [],
  template: ``,
})
export class TeamsListComponent implements OnInit {
  protected teams: Array<Team> = Array.of();
  private readonly teamService = new TeamsService();

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    console.log(this.teams);
  }
}
