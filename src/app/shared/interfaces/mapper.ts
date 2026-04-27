export interface Mapper<T, TJson> {
  fromJSON(raw: TJson): T;

  toJSON(obj: T): TJson;
}
