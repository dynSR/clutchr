export {};

declare global {
  interface Array<T> {
    isNullOrEmpty(): boolean;
    first(): T;
    last(): T;
  }
}

Array.prototype.isNullOrEmpty = function <T>(this: T[]): boolean {
  return !this || this.length === 0;
};

Array.prototype.first = function <T>(this: T[]): T | null {
  return this.isNullOrEmpty() ? null : this[0];
};

Array.prototype.last = function <T>(this: T[]): T | null {
  return this.isNullOrEmpty() ? null : this[this.length - 1];
};
