declare const __brand: unique symbol;

export type Brand<T, B extends string> = T & { [__brand]: B };

export type ID = Brand<string, string>;
export type TeamId = ID;
export type PlayerId = ID;
export type PlayerPositionId = ID;
export type MajorEventId = ID;
export type NewsId = ID;
export type MatchId = ID;

export function createId<B extends string>(): Brand<string, B> {
  const id = crypto.randomUUID();
  return id as Brand<string, B>;
}

export function createFrom<B extends string>(input: string): Brand<string, B> {
  if (input.isNullOrEmpty()) throw new Error(`Input is required to be defined and not empty.`);
  return input as Brand<string, B>;
}
