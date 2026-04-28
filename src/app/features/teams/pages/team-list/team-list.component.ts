import { Component } from '@angular/core';
import { TeamService } from '../../team.service';
import { Team } from '../../models/team.model';
import { TeamListItemComponent } from '../../components/team-list-item/team-list-item.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'team-list',
  imports: [TeamListItemComponent, AsyncPipe],
  template: `
    @if (teams$ | async; as teams) {
      @for (team of teams; track team.id) {
        <team-list-item [team]="team" />
      }
    }
  `,
  host: {
    class: 'grid grid-cols-4 gap-xl p-lg',
  },
})
export class TeamListComponent {
  protected teams$: Observable<Array<Team>>;

  constructor(private readonly teamService: TeamService) {
    this.teams$ = this.teamService.getAll();
  }
}
