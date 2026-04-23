export {};

declare global {
  interface StringConstructor {
    Comma: string;
    Empty: string;
    Hyphen: string;
    Slash: string;
    Underscore: string;
    WhiteSpace: string;
  }

  interface String {
    allCapitalized(): string;
    capitalized(): string;
    equals(other: string): boolean;
    isEmpty(): boolean;
    isNullOrEmpty(): boolean;
    splitOnCaps(): string;
    withoutFirstChar(): string;
    toKebabCase(): string;
    toKebabLowerCase(): string;
    toKebabPascalCase(): string;
  }
}

String.Comma = ',';
String.Empty = '';
String.Hyphen = '-';
String.Slash = '/';
String.Underscore = '_';
String.WhiteSpace = ' ';

String.prototype.isEmpty = function (this: string): boolean {
  return this.length === 0 || this.trim().length === 0;
};

String.prototype.isNullOrEmpty = function (this: string): boolean {
  return this === null || this.isEmpty();
};

String.prototype.equals = function (this: string, other: string): boolean {
  return this === other;
};

String.prototype.allCapitalized = function (this: string): string {
  return this.split(String.WhiteSpace)
    .map((g) => g.capitalized())
    .toString()
    .replaceAll(String.Comma, String.WhiteSpace);
};

String.prototype.capitalized = function (this: string): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toKebabCase = function (this: string): string {
  return this.replaceAll(String.WhiteSpace, String.Hyphen);
};

String.prototype.toKebabPascalCase = function (this: string): string {
  return this.split(String.WhiteSpace)
    .map((g) => g.capitalized())
    .toString()
    .replaceAll(String.Comma, String.Hyphen);
};

String.prototype.toKebabLowerCase = function (this: string): string {
  return this.replaceAll(String.WhiteSpace, String.Hyphen).toLowerCase();
};

String.prototype.withoutFirstChar = function (this: string): string {
  return this.slice(1, this.length);
};

String.prototype.splitOnCaps = function (this: string): string {
  return this.split(/(?<![A-Z])(?=[A-Z])/)
    .toString()
    .replaceAll(String.Comma, String.WhiteSpace);
};
