export type FixedSizeArray<T, N extends number> =
  N extends 0
    ? never[]
    : Record<number, T> & { length: N } & readonly T[];
