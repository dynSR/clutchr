type ColorStop = { color: string; position?: number }; // position en % (0-100)

export class Gradient {
  private readonly direction: string;
  private colorStops: ColorStop[];

  constructor(direction: string, colorStops: ColorStop[]) {
    this.direction = direction;
    this.colorStops = [...colorStops].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  }

  applyTo(element: HTMLElement): void {
    element.style.background = this.toString();
  }

  toString(): string {
    const stops = this.colorStops
      .map((stop) => {
        const pos = stop.position !== undefined ? ` ${stop.position}%` : '';
        return `${stop.color}${pos}`;
      })
      .join(', ');

    return `linear-gradient(${this.direction}, ${stops})`;
  }
}

export class GradientBuilder {
  private direction: string = 'to right';
  private colorStops: ColorStop[] = [];

  withDirection(dir: string): this {
    this.direction = dir;
    return this;
  }

  from(color: string, position: number = 0): this {
    this.colorStops.push({ color, position });
    return this;
  }

  via(color: string, position: number): this {
    this.colorStops.push({ color, position });
    return this;
  }

  to(color: string, position: number = 100): this {
    this.colorStops.push({ color, position });
    return this;
  }

  build(): Gradient {
    return new Gradient(this.direction, this.colorStops);
  }
}
