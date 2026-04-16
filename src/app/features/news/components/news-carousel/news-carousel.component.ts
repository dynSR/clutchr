import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../news.service';
import { SliderModule } from '../../../../shared/utils/slider';
import { NewsCarouselControlsComponent } from './news-carousel-controls.component';
import { NewsCarouselIndicatorsComponent } from './news-carousel-indicators.component';
import { UIPosition } from '../../../../shared/enums/UIPosition';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Timer } from '../../../../shared/utils/timer';
import Slider = SliderModule.Slider;

@Component({
  selector: 'news-carousel',
  imports: [NewsCarouselControlsComponent, NewsCarouselIndicatorsComponent, NewsCarouselIndicatorsComponent],
  template: `
    <!-- Carousel wrapper -->
    <section role="group" class=" overflow-hidden">
      <ul #carouselItemsWrapper class="flex items-center h-[360px] p-5 snap-x-mandatory">
        @for (news of latestNews; track news.id) {
          <li #carouselItem class="flex-none w-full list-none p-5 snap-center">
            <a href="{{ 'news/' + news.id }}">
              <img src="{{ news.illustrationSrc }}" alt="News carousel illustration" />
            </a>
            />
          </li>
        }
      </ul>
    </section>

    @defer (hydrate on immediate) {
      @if (slider !== undefined) {
        <small class="absolute top-3 right-6">{{ this.slider.rangePosition }}</small>

        <!-- Slider indicators -->
        <section
          role="group"
          class="flex gap-xs absolute bottom-3.5 left-1/2 z-30 -translate-x-1/2 bg-neutral-900/25 rounded-2xl p-xs"
        >
          @for (_ of latestNews; track $index) {
            <news-carousel-indicators
              [index]="$index"
              [onCarouselSlideEvent]="slider.onItemSlide$.asObservable()"
              (clickAction)="handleCarouselIndicatorsClick($event)"
            />
          }
        </section>

        <!-- Slider controls -->
        <news-carousel-controls
          [position]="UIPosition.Left"
          (clickAction)="handleCarouselPreviousControlsClick()"
        />
        <news-carousel-controls
          [position]="UIPosition.Right"
          (clickAction)="handleCarouselNextControlsClick()"
        />
      }
    }
  `,
  host: {
    class: 'relative w-full rounded bg-neutral-900/5',
  },
})
export class NewsCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('carouselItemsWrapper') itemWrapper!: ElementRef<HTMLUListElement>;
  @ViewChildren('carouselItem', { read: ElementRef }) items!: QueryList<
    ElementRef<HTMLUListElement>
  >;
  protected latestNews: Array<News> = Array.of();
  protected slider!: Slider<ElementRef<HTMLElement>>;
  protected readonly UIPosition = UIPosition;
  protected readonly timer: Timer;
  protected readonly slideDelayInSeconds: number = 5;
  private readonly newsService = new NewsService();
  private readonly destroyRef: DestroyRef;

  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.timer = new Timer(this.slideDelayInSeconds, true);
  }

  ngOnInit() {
    this.latestNews = this.newsService.getNewsWithLimit(5);
  }

  ngAfterViewInit() {
    this.slider = new Slider(this.items.toArray());

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
    this.onChildClicked();
  }

  protected handleCarouselNextControlsClick(): void {
    this.slider.showNext();
    this.onChildClicked();
  }

  protected handleCarouselIndicatorsClick(index: number): void {
    this.slider.goTo(index);
    this.onChildClicked();
  }

  private onChildClicked(): void {
    this.timer.reset();
  }

  private setItemsWrapperTransform(sliderIndex: number): void {
    this.itemWrapper.nativeElement.style.transform = `translateX(${-100 * sliderIndex}%)`;
  }
}
