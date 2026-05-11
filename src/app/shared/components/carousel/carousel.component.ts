import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { CarouselControlsComponent } from './carousel-controls.component';
import { CarouselIndicatorsComponent } from './carousel-indicators.component';
import { UIPosition } from '../../enums/ui-position.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Timer } from '../../utils/timer';
import { CarouselItemProps } from '../../interfaces/carousel-item-props';
import { Slider } from '../../utils/slider';

@Component({
  selector: 'app-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarouselControlsComponent, CarouselIndicatorsComponent, CarouselIndicatorsComponent],
  template: `
    <!-- Carousel wrapper -->
    <section role="group" class=" overflow-hidden">
      <ul #carouselItemsWrapper class="flex items-center h-[360px] p-5 snap-x-mandatory">
        @for (item of items; track item.id) {
          <li #carouselItem class="flex-none w-full list-none p-5 snap-center">
            <a href="{{ item.linkToDetails }}">
              <img src="{{ item.illustrationSrc }}" alt="News carousel illustration" />
            </a>
            />
          </li>
        }
      </ul>
    </section>

    <!-- Slider position (X of Y) -->
    <small class="absolute top-3 right-6">{{ this.slider.rangePosition }}</small>

    <!-- Slider indicators -->
    <section
      role="group"
      class="flex gap-xs absolute bottom-3.5 left-1/2 z-30 -translate-x-1/2 bg-neutral-900/25 rounded-2xl p-xs"
    >
      @for (_ of items; track $index) {
        <app-carousel-indicators
          [index]="$index"
          [onCarouselSlideEvent]="slider.onItemSlide$.asObservable()"
          (clickAction)="handleCarouselIndicatorsClick($event)"
        />
      }
    </section>

    <!-- Slider controls -->
    <app-carousel-controls
      [position]="UIPosition.Left"
      (clickAction)="handleCarouselPreviousControlsClick()"
    />
    <app-carousel-controls
      [position]="UIPosition.Right"
      (clickAction)="handleCarouselNextControlsClick()"
    />
  `,
  host: {
    class: 'relative w-full rounded bg-neutral-900/5',
  },
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) items!: CarouselItemProps[];
  @Input({ required: false }) slidingDelayInSeconds = 5;

  @ViewChild('carouselItemsWrapper') itemWrapper!: ElementRef<HTMLUListElement>;
  @ViewChildren('carouselItem', { read: ElementRef }) itemRefs!: QueryList<
    ElementRef<HTMLLIElement>
  >;

  protected readonly UIPosition = UIPosition;
  protected slider!: Slider<ElementRef<HTMLElement>>;

  private readonly timer: Timer;
  private readonly destroyRef: DestroyRef;

  constructor() {
    this.slider = new Slider();
    this.timer = new Timer(this.slidingDelayInSeconds, true);
    this.destroyRef = inject(DestroyRef);
  }

  ngAfterViewInit() {
    this.slider.init(this.itemRefs.toArray());
    this.slider.onItemSlide$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((i) => this.setItemsWrapperTransform(i));

    this.timer.onTimerStopped.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.slider.showNext();
      this.setItemsWrapperTransform(this.slider.currentPosition);
    });
  }

  ngOnDestroy() {
    this.timer?.clear();
  }

  protected handleCarouselPreviousControlsClick(): void {
    this.slider.showPrevious();
    this.timer.reset();
  }

  protected handleCarouselNextControlsClick(): void {
    this.slider.showNext();
    this.timer.reset();
  }

  protected handleCarouselIndicatorsClick(index: number): void {
    this.slider.goTo(index);
    this.timer.reset();
  }

  private setItemsWrapperTransform(sliderIndex: number): void {
    this.itemWrapper.nativeElement.style.transform = `translateX(${-100 * sliderIndex}%)`;
  }
}
