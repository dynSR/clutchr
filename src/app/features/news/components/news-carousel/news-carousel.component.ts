import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../news.service';
import { NewsCarouselItemComponent } from './news-carousel-item.component';
import { SliderModule } from '../../../../shared/utils/slider';
import { NewsCarouselControls } from './news-carousel-controls';
import { NewsCarouselIndicators } from './news-carousel-indicators';
import { UIPosition } from '../../../../shared/enums/UIPosition';
import Slider = SliderModule.Slider;

@Component({
  selector: 'news-carousel',
  imports: [
    NewsCarouselItemComponent,
    NewsCarouselControls,
    NewsCarouselIndicators,
    NewsCarouselIndicators,
  ],
  template: `
    <!-- Carousel wrapper -->
    <section role="group" class="relative h-56 overflow-hidden rounded md:h-96 shadow-lg">
      @for (news of latestNews; track news.id) {
        <news-carousel-item
          #carouselItem
          class="hidden duration-700 ease-in-out"
          carouselImgSrc="{{ news.illustrationSrc }}"
        />
      }
    </section>

    @defer {
      @if (slider !== undefined) {
        <small class="absolute top-3 right-6">{{ this.slider.currentPosition }}</small>

        <!-- Slider indicators -->
        <section
          role="group"
          class="flex gap-sm absolute bottom-3.5 left-1/2 z-30 -translate-x-1/2"
        >
          @for (_ of latestNews; track $index) {
            <news-carousel-indicators
              [index]="$index"
              [onCarouselSlideEvent]="this.slider.onItemSlide.asObservable()"
              (clickAction)="slider.goTo($event)"
            />
          }
        </section>

        <!-- Slider controls -->
        <news-carousel-controls
          [position]="UIPosition.Left"
          (clickAction)="slider.showPrevious()"
        />
        <news-carousel-controls [position]="UIPosition.Right" (clickAction)="slider.showNext()" />
      }
    }
  `,
  host: {
    class: 'relative w-full',
  },
})
export class NewsCarouselComponent implements OnInit, AfterViewInit {
  @ViewChildren('carouselItem', { read: ElementRef }) items!: QueryList<ElementRef<HTMLElement>>;
  protected latestNews: Array<News> = Array.of();
  protected slider?: Slider<ElementRef<HTMLElement>>;
  protected readonly UIPosition = UIPosition;
  private readonly newsService = new NewsService();

  ngOnInit() {
    this.latestNews = this.newsService.getLatestNews();
  }

  ngAfterViewInit() {
    this.slider = new Slider(this.items.toArray());
  }
}
