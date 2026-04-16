import { Injectable } from '@angular/core';
import { matchesData } from '../matches-data';
import { Match } from '../models/match';

@Injectable({ providedIn: 'root' })
export class MatchesService {
  private readonly matches: Array<Match> = matchesData;

  getIncomingMatches(): Array<Match> {
    if (this.matches.length === 0) return [];

    const now = Date.now();
    const closestMatch = this.matches.reduce((prev, curr) => {
      const prevDiff = Math.abs(now - prev.date.getTime());
      const currDiff = Math.abs(now - curr.date.getTime());
      return currDiff < prevDiff ? curr : prev;
    });
    const targetDay = closestMatch.date.getDay();
    return this.matches
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
