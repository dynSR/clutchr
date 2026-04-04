import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PlayerCard } from './components/player-card/player-card';

@Component({
  selector: 'team-roster',
  imports: [NgOptimizedImage, PlayerCard],
  templateUrl: './team-roster.html',
  styleUrl: './team-roster.scss',
})
export class TeamRoster {}
