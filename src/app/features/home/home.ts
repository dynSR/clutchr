import { Component } from '@angular/core';
import { IncomingMatches } from './components/incoming-matches/incoming-matches';
import { News } from './components/news/news';
import { SeasonEvents } from './components/season-events/season-events';
import { TeamScoreboard } from './components/team-scoreboard/team-scoreboard';
import { Navbar } from '../../shared/components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [IncomingMatches, News, SeasonEvents, TeamScoreboard, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
