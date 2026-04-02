import { Component } from '@angular/core';
import { TeamScoreboardRow } from './components/team-scoreboard-row/team-scoreboard-row';

@Component({
  selector: 'team-scoreboard',
  imports: [TeamScoreboardRow],
  templateUrl: './team-scoreboard.html',
  styleUrl: './team-scoreboard.scss',
})
export class TeamScoreboard {}
