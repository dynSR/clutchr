import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'player-card',
  imports: [NgOptimizedImage],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {}
