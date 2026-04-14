import { ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export namespace SliderModule {
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
    readonly onItemSlide = new BehaviorSubject<number>(0);
    private readonly range!: CircularRange;
    private readonly items: Array<T>;

    constructor(items: Array<T>) {
      if (items.length === 0) {
        throw new Error(`${Slider.name} — items array must not be empty`);
      }

      this.items = items;
      this.range = new CircularRange(items.length);
      this.showCurrent();
    }

    get currentPosition(): string {
      return this.range.toString();
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
      this.hideAllItems();
      this.showItem(this.items.at(index));
      this.onItemSlide.next(index);
    }

    private showItem(item: ElementRef<HTMLElement> | undefined): void {
      if (!item) {
        throw new ReferenceError(`${Slider.name} — The item is undefined`);
      }
      item.nativeElement.classList.remove('hidden');
    }

    private hideAllItems(): void {
      for (let item of this.items) {
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
}
