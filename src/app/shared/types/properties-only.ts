export type PropertiesOnly<T> = {
  [K in keyof T as T[K] extends Function | (() => any) ? never : K]: T[K];
};
