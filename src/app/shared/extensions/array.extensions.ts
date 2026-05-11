export {};

declare global {
  interface Array<T> {
    isNullOrEmpty(): boolean;
    first(): T;
    last(): T;
    remove(item: T): T[];
    removeAt(index: number): T[];
    removeFirst(): T[];
    removeLast(): T[];
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

Array.prototype.remove = function <T>(this: T[], item: T): T[] {
  if (this.isNullOrEmpty()) {
    console.error(`Tried to remove item on undefined array`);
    return [];
  }

  if (!this.includes(item)) {
    console.error(`Tried to remove item ${item} but the array does not include it`);
    return Array.of(...this);
  }

  const itemIndex = this.indexOf(item);
  this.splice(itemIndex, 1);
  return this;
};

Array.prototype.removeAt = function <T>(this: T[], index: number): T[] {
  if (this.isNullOrEmpty()) {
    console.error(`Tried to remove item on undefined array`);
    return [];
  }

  if (index < 0) {
    console.error(`Tried to remove item with negative index argument ${index}`);
    return Array.of(...this);
  }

  if (index > this.length) {
    console.error(`Tried to remove item at ${index} with an array of length ${this.length}`);
    return Array.of(...this);
  }

  this.splice(index, 1);
  return this;
};

Array.prototype.removeFirst = function <T>(this: T[]): T[] {
  return this.removeAt(0);
};

Array.prototype.removeLast = function <T>(this: T[]): T[] {
  return this.removeAt(this.length - 1);
};
