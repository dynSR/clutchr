export {};

declare global {
  interface StringConstructor {
    Empty: string;
    WhiteSpace: string;
  }

  interface String {
    isEmpty(): boolean;
    equals(other: string): boolean;
    capitalized(): string;
    toKebabCase(): string;
    toKebabLowerCase(): string;
  }
}

String.Empty = '';
String.WhiteSpace = ' ';

String.prototype.isEmpty = function (this: string): boolean {
  return this.length === 0 || this.trim().length === 0;
};

String.prototype.equals = function (this: string, other: string): boolean {
  return this === other;
};

String.prototype.capitalized = function (this: string): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toKebabCase = function (this: string): string {
  return this.replaceAll(String.WhiteSpace, '-');
};

String.prototype.toKebabLowerCase = function (this: string): string {
  return this.replaceAll(String.WhiteSpace, '-').toLowerCase();
};
