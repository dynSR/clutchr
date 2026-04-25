export interface Mapper<T, TRaw> {
  fromJSON(raw: TRaw): T;
  toJSON(obj: T): TRaw;
}
