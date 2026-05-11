interface ColorProps {
  r: number;
  g: number;
  b: number;
  a: number;
}

export class Color implements ColorProps {
  r: number;
  g: number;
  b: number;
  a: number;

  /**
   * Creates a Color instance from RGBA values.
   * @param r - Red component (0-255).
   * @param g - Green component (0-255).
   * @param b - Blue component (0-255).
   * @param a - Alpha component (0-1, default: 1).
   */
  constructor(r: number, g: number, b: number, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.clamp();
  }

  /**
   * Creates a Color instance from a hex string.
   * @param hex - The hex color string (e.g., "#ff0000" or "ff0000").
   * @returns A new Color instance.
   */
  static fromHex(hex: string): Color {
    const rgba = Color.hexToRgba(hex);
    return new Color(rgba[0], rgba[1], rgba[2], rgba[3]);
  }

  private static colorPropToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  private static hexToRgba(hex: string): [number, number, number, number] {
    hex = hex.replace(/^#/, '');

    let r: number,
      g: number,
      b: number,
      a = 1;
    if (hex.length === 3 || hex.length === 4) {
      // Short format (#RGB or #RGBA)
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
      if (hex.length === 4) a = parseInt(hex[3] + hex[3], 16) / 255;
    } else if (hex.length === 6 || hex.length === 8) {
      // Long format (#RRGGBB or #RRGGBBAA)
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
      if (hex.length === 8) a = parseInt(hex.substring(6, 8), 16) / 255;
    } else {
      throw new Error('Invalid hex color format');
    }

    return [r, g, b, a];
  }

  /**
   * Converts the color to a hex string.
   * @param includeAlpha - Whether to include the alpha channel in the hex string (default: false).
   * @returns The hex color string (e.g., "#03ff5b" or "#03ff5bff").
   */
  toHex(includeAlpha = false): string {
    const rHex = Color.colorPropToHex(this.r);
    const gHex = Color.colorPropToHex(this.g);
    const bHex = Color.colorPropToHex(this.b);
    let hex = `#${rHex}${gHex}${bHex}`;

    if (includeAlpha && this.a < 1) {
      const aHex = Color.colorPropToHex(Math.round(this.a * 255));
      hex += aHex;
    }

    return hex;
  }

  toString(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  private clamp(): void {
    this.r = Math.max(0, Math.min(255, Math.round(this.r)));
    this.g = Math.max(0, Math.min(255, Math.round(this.g)));
    this.b = Math.max(0, Math.min(255, Math.round(this.b)));
    this.a = Math.max(0, Math.min(1, this.a));
  }
}

export const COLOR_WHITE: Color = Color.fromHex('#FFFFFF');
