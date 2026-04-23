import { Color } from '../utils/color';

declare module '../utils/color' {
  interface Color {
    withR(r: number): Color;
    withG(g: number): Color;
    withB(b: number): Color;
    withAlpha(a: number): Color;
  }
}

Color.prototype.withR = function (this: Color, r: number): Color {
  return new Color(r, this.g, this.b);
};

Color.prototype.withG = function (this: Color, g: number): Color {
  return new Color(this.r, g, this.b);
};

Color.prototype.withB = function (this: Color, b: number): Color {
  return new Color(this.r, this.g, b);
};

Color.prototype.withAlpha = function (this: Color, a: number): Color {
  return new Color(this.r, this.g, this.b, a);
};
