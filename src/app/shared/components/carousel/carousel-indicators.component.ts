import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'carousel-indicators',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button #indicator
      type="button"
      class="flex items-center relative w-4 h-4 rounded cursor-pointer font-extrabold"
      (click)="onClick(index)"
    >
      @defer (hydrate on immediate) {
        @if (isIndicatedElementShown) {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#CFFFBBFF"
          >
            <path
              d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
            />
          </svg>
        } @else {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#CFFFBBFF"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
        }
      }
    </button>
  `,
})
export class CarouselIndicatorsComponent implements AfterViewInit {
  @Input({ required: true }) index: number = 0;
  @Input({ required: true }) onCarouselSlideEvent!: Observable<number>;
  @Output() clickAction = new EventEmitter<number>();
  @ViewChild('indicator') indicator!: ElementRef<HTMLButtonElement>;
  readonly destroyRef: DestroyRef;
  protected isIndicatedElementShown!: boolean;

  constructor(private cdr: ChangeDetectorRef) {
    this.destroyRef = inject(DestroyRef);
  }

  ngAfterViewInit() {
    this.onCarouselSlideEvent.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((sliderIndex) => {
      this.isIndicatedElementShown = this.index === sliderIndex;
      if (this.isIndicatedElementShown) this.cdr.markForCheck();
    });
  }

  protected onClick(eventIndex: number): void {
    this.clickAction.emit(eventIndex);
  }
}
