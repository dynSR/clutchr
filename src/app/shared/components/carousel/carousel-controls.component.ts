import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { UIPosition } from '../../enums/ui-position.enum';

@Component({
  selector: 'carousel-controls',
  imports: [],
  template: `
    <button
      type="button"
      class="flex items-center justify-center cursor-pointer h-full group-focus:outline-none"
      (click)="onClick()"
    >
      <!-- Chevron icon -->
      <span
        class="inline-flex items-center justify-center size-[2rem] rounded group-focus:ring-4 group-focus:outline-none"
      >
        <svg
          class="w-5 h-5 text-white group-hover:shadow-xl"
          [class.rotate-180]="this.position === UIPosition.Right"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="m15 19-7-7 7-7"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
  `,
  host: {
    class: 'group absolute top-0 h-full z-10 rounded bg-neutral-900/5 hover:bg-primary-50/25',
  },
})
export class CarouselControlsComponent {
  @Input({ required: true }) position: UIPosition = UIPosition.Left;
  @Output() clickAction = new EventEmitter<void>();
  protected readonly UIPosition = UIPosition;

  @HostBinding('class')
  get isLeft() {
    return this.position === UIPosition.Left ? 'start-0' : 'end-0';
  }

  onClick() {
    this.clickAction.emit();
  }
}
