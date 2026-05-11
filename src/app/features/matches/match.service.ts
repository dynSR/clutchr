import { inject, Injectable } from '@angular/core';
import { Match, MatchJsonProps } from './models/match.model';
import { BaseService } from '../../shared/utils/base-service';
import { AssetFileExtension, assets } from '../../shared/utils/assets-finder';
import { HttpClient } from '@angular/common/http';
import { MatchMapper } from './match.mapper';

@Injectable({ providedIn: 'root' })
export class MatchService extends BaseService<Match, MatchJsonProps> {
  protected override dataFilePath: string = assets('data/matches', AssetFileExtension.JSON);

  constructor() {
    super(inject(HttpClient), MatchMapper);
  }

  // getIncomingMatches(): Array<Match> {
  //   if (this.matches.length === 0) return [];
  //
  //   const matchDurationMs = 90 * 60 * 1000;
  //   const now = new Date();
  //   const upcoming = this.matches.filter(
  //     (m) => m.date.getTime() >= now.getTime() - matchDurationMs,
  //   );
  //   if (upcoming.length === 0) return [];
  //
  //   const closestMatch = upcoming.reduce((prev, curr) =>
  //     curr.date.getTime() < prev.date.getTime() ? curr : prev,
  //   );
  //
  //   const targetDay = closestMatch.date.getDay();
  //   return upcoming
  //     .filter((m) => m.date.getDay() === targetDay)
  //     .sort((a, b) => a.date.getTime() - b.date.getTime());
  // }
}
