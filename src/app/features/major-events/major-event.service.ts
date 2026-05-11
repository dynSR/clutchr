import { inject, Injectable} from '@angular/core';
import {MajorEvent, MajorEventJsonProps} from './models/major-event.model';
import {BaseService} from '../../shared/utils/base-service';
import {AssetFileExtension, assets} from '../../shared/utils/assets-finder';
import {HttpClient} from '@angular/common/http';
import {MajorEventMapper} from './major-event.mapper';

@Injectable({providedIn: 'root'})
export class MajorEventService extends BaseService<MajorEvent, MajorEventJsonProps> {
  protected override dataFilePath: string = assets('data/major-events', AssetFileExtension.JSON);

  constructor() {
    super(inject(HttpClient), MajorEventMapper);
  }
}
