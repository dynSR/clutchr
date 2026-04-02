import { Component } from '@angular/core';
import { IncomingMatches } from './components/incoming-matches/incoming-matches';
import { News } from './components/news/news';
import { SeasonEvents } from './components/season-events/season-events';
import { TeamScoreboard } from './components/team-scoreboard/team-scoreboard';
import { SeasonInfoBanner } from './components/season-info-banner/season-info-banner';

@Component({
  selector: 'app-home',
  imports: [IncomingMatches, News, SeasonEvents, TeamScoreboard, SeasonInfoBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
