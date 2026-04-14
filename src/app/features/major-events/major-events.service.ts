import { Injectable } from '@angular/core';
import { MajorEvent } from './models/major-event';
import { majorEventsData } from './major-events-data';

@Injectable({ providedIn: 'root' })
export class MajorEventsService {
  private readonly majorEvents: Array<MajorEvent> = majorEventsData;

  getMajorEvents(): Array<MajorEvent> {
    return this.majorEvents;
  }
}
