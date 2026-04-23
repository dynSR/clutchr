import { Injectable } from '@angular/core';
import { MajorEvent } from './models/major-event.model';
import { majorEventsData } from './major-events-data';

@Injectable({ providedIn: 'root' })
export class MajorEventService {
  private readonly majorEvents: Array<MajorEvent> = majorEventsData;

  getMajorEvents(): Array<MajorEvent> {
    return this.majorEvents;
  }
}
