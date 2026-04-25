import { DefaultProps } from '../interfaces/default-props';
import { ID } from '../types/branded-types';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Mapper } from '../interfaces/mapper';

export abstract class BaseService<T extends DefaultProps<ID>, TRaw> {
  protected cachedData: Array<T> = Array.of();
  protected abstract dataFilePath: string;

  protected constructor(
    protected readonly http: HttpClient,
    private readonly mapper: Mapper<T, TRaw>,
  ) {}

  getAll(): Observable<Array<T>> {
    return new Observable((observer) => {
      if (!this.cachedData.isNullOrEmpty()) {
        observer.next(this.cachedData);
        return observer.complete();
      }

      this.http
        .get<Array<TRaw>>(this.dataFilePath)
        .pipe(map((data) => data.map(this.mapper.fromJSON)))
        .subscribe((data) => {
          console.log(data);
          this.cachedData = data;
          observer.next(data);
          observer.complete();
        });
    });
  }

  get(id: ID): Observable<T | undefined> {
    if (this.cachedData?.length) {
      const team = this.cachedData.find((t) => t.id === id);
      return of(team);
    }

    return this.getAll().pipe(map((teams) => teams.find((t) => t.id === id)));
  }
}
