export {};

declare global {
  interface StringConstructor {
    Empty: string;
  }

  interface String {
    isEmpty(): boolean;
    equals(other: string): boolean;
    capitalized(): string;
  }
}

String.Empty = '';

String.prototype.isEmpty = function (this: string): boolean {
  return this.length === 0 || this.trim().length === 0;
};

String.prototype.equals = function (this: string, other: string): boolean {
  return this === other;
};

String.prototype.capitalized = function (this: string): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
