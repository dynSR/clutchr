import { Component } from '@angular/core';
import { TeamCard } from './components/team-card/team-card';

@Component({
  selector: 'app-teams-list',
  imports: [TeamCard],
  templateUrl: './teams-list.html',
  styleUrl: './teams-list.scss',
})
export class TeamsList {}
