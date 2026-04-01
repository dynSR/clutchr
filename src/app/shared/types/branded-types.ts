type Brand<K, T> = K & { __brand: T };

export type TeamId = Brand<string, 'TeamId'>;
export type PlayerId = Brand<string, 'PlayerId'>;
export type GameModeId = Brand<string, 'GameModeId'>;
export type PlayerRoleId = Brand<string, 'PlayerRoleId'>;
export type PlayerPositionId = Brand<string, 'PlayerRoleId'>;

export function createId<K extends string, T extends string>(id: K, typeName: T): Brand<K, T> {
  if (!id.trim()) throw new Error(`${typeName} cannot be empty`);
  return id as Brand<K, T>;
}
