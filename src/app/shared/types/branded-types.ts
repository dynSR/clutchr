declare const __brand: unique symbol;

export type Brand<T, B extends string> = T & { [__brand]: B };

export type ID = Brand<string, string>;
export type TeamId = ID;
export type PlayerId = ID;
export type GameModeId = ID;
export type PlayerRoleId = ID;
export type PlayerPositionId = ID;
export type MajorEventId = ID;
export type NewsId = ID;
export type MatchId = ID;

export function createId<K extends string, T extends string>(id: K, typeName: T): Brand<K, T> {
  if (!id.trim()) throw new Error(`${typeName} cannot be empty`);
  return id as Brand<K, T>;
}
