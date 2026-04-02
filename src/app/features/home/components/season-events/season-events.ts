import { Component } from '@angular/core';
import { SeasonEventsRow } from './components/season-events-row/season-events-row';

@Component({
  selector: 'season-events',
  imports: [SeasonEventsRow],
  templateUrl: './season-events.html',
  styleUrl: './season-events.scss',
})
export class SeasonEvents {}
