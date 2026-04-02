import { Component } from '@angular/core';
import { IncomingMatchesRow } from './components/incoming-matches-row/incoming-matches-row';

@Component({
  selector: 'incoming-matches',
  imports: [IncomingMatchesRow],
  templateUrl: './incoming-matches.html',
  styleUrl: './incoming-matches.scss',
})
export class IncomingMatches {}
