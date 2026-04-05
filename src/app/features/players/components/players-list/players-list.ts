import { Component } from '@angular/core';
import { PlayerListRow } from './components/player-list-row/player-list-row';

@Component({
  selector: 'app-players-list',
  imports: [PlayerListRow],
  templateUrl: './players-list.html',
  styleUrl: './players-list.scss',
})
export class PlayersList {}
