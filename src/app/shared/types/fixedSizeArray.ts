type FixedSizeArray<T, N extends number> =
  N extends 0
    ? never[]
    : { [k in number]: T } & { length: N } & ReadonlyArray<T>;
