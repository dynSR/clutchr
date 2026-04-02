import { Component } from '@angular/core';
import { IncomingMatchesTeamInfo } from '../incoming-matches-team-info/incoming-matches-team-info';

@Component({
  selector: 'incoming-matches-row',
  imports: [IncomingMatchesTeamInfo],
  templateUrl: './incoming-matches-row.html',
  styleUrl: './incoming-matches-row.scss',
})
export class IncomingMatchesRow {}
