import { ElementRef, signal } from '@angular/core';

class CircularRange {
  current: number;
  private readonly max: number;

  constructor(max: number) {
    if (max <= 0) {
      throw new Error(`${CircularRange.name} — length must be positive`);
    }
    this.current = 0;
    this.max = max;
  }

  next(): number {
    this.current = (this.current + 1) % this.max;
    return this.current;
  }

  previous(): number {
    this.current = (this.current - 1 + this.max) % this.max;
    return this.current;
  }

  setCurrent(value: number) {
    this.current = value;
  }

  toString(): string {
    return `${this.current + 1} of ${this.max}`;
  }
}

export class Slider<T extends ElementRef> {
  readonly onItemSlide = signal<number>(0);
  readonly onItemSlide$ = this.onItemSlide.asReadonly();
  // readonly onItemSlide$ = new BehaviorSubject<number>(0);
  private range!: CircularRange;
  private items: T[] = [];

  get currentPosition(): number {
    return this.range.current;
  }

  get rangePosition(): string {
    return this.items.isNullOrEmpty() ? String.Empty : this.range.toString();
  }

  init(items: T[]): void {
    if (items.length === 0) {
      throw new Error(`${Slider.name} — items array must not be empty`);
    }

    this.items = items;
    this.range = new CircularRange(items.length);
    this.showCurrent();
  }

  showPrevious(): void {
    this.showItemAt(this.range.previous());
  }

  showNext(): void {
    this.showItemAt(this.range.next());
  }

  goTo(index: number): void {
    this.range.setCurrent(index);
    this.showItemAt(index);
  }

  private showCurrent(): void {
    this.showItemAt(this.range.current);
  }

  private showItemAt(index: number): void {
    this.showItem(this.items.at(index));
    this.onItemSlide.set(index);
  }

  private showItem(item: ElementRef<HTMLElement> | undefined): void {
    if (!item) {
      throw new ReferenceError(`${Slider.name} — The item is undefined`);
    }
    item.nativeElement.classList.remove('hidden');
  }

  private hideAllItems(): void {
    for (const item of this.items) {
      this.hideItem(item);
    }
  }

  private hideItem(item: ElementRef<HTMLElement> | undefined): void {
    if (!item) {
      throw new ReferenceError(`${Slider.name} — The item is undefined`);
    }
    item.nativeElement.classList.add('hidden');
  }
}
