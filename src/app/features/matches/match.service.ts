import { Injectable } from '@angular/core';
import { matchesData } from './matches-data';
import { Match } from './models/match.model';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private readonly matches: Array<Match> = matchesData;

  getIncomingMatches(): Array<Match> {
    if (this.matches.length === 0) return [];

    const matchDurationMs = 90 * 60 * 1000;
    const now = new Date();
    const upcoming = this.matches.filter(
      (m) => m.date.getTime() >= now.getTime() - matchDurationMs,
    );
    if (upcoming.length === 0) return [];

    const closestMatch = upcoming.reduce((prev, curr) =>
      curr.date.getTime() < prev.date.getTime() ? curr : prev,
    );

    const targetDay = closestMatch.date.getDay();
    return upcoming
      .filter((m) => m.date.getDay() === targetDay)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  getMatchesDescOrder(): Array<Match> {
    return this.matches.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getMatchesAscOrder() {
    return this.matches.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  getMatches(): Array<Match> {
    return this.matches;
  }
}
